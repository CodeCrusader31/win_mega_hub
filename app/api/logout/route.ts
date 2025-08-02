
import {NextResponse} from 'next/server';

export async function GET(){

    const response = NextResponse.json({
        message: 'Logout Successful',
        redirectUrl: '/login',
    })

    // Clear the token cookie
    response.cookies.set({
        name: 'token',
        value: '',
        httpOnly: true,
         expires: new Date(0),
    });

    return response;
}