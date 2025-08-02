import {NextResponse} from 'next/server';

import {users} from '@/lib/users';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;


if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in your environment variables');
}

export async function POST(req :  Request){
    const {username,password} = await req.json();

    const user = users.find((u) => u.username === username 
&& u.password === password);

    if(!user){
        return NextResponse.json({message 
            : 'Invalid username or password'}, {
            status: 401});
        
    }

    const token = jwt.sign(
  {
    username: user.username, 
    role: user.role,
  },
  JWT_SECRET!,
  {
    expiresIn: '1h',
  }
);


    const response = NextResponse.json({
        message : 'Login Successful',
        redirectUrl : user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard',
    })

    response.cookies.set({
        name: 'token',
        value : token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
        path: '/',
    });

    return response;



}
