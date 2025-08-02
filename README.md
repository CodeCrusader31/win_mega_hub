A minimal, secure, and **role-based authentication system** built using **Next.js**, **TypeScript**, and **JWT**.  
Users are authenticated via a cookie-based JWT, and redirected to their respective dashboards based on role (`admin` or `user`)


Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/win_mega_hub.git
   cd win_mega_hub
2.npm install

3.Create a .env.local file in the root:
  JWT_SECRET=your_secret_key_here

now npm run dev

How the Authentication Flow Works
-> Login
User enters credentials (username and password).
POST request is sent to /api/login.

-> Server Validation
 The server checks the credentials against a predefined user list.
On success, a JWT is created with:
Token is returned in an HttpOnly cookie named token


-> Middleware Protection
On accessing protected routes like /admin/dashboard or /user/dashboard:
Middleware reads and verifies the token.
Redirects users based on role.
If token is missing/invalid, redirects to /login.

On successful login, users are greeted with:
Role-based dashboards (Admin or User) show relevant content.


-> Logout
On logout, /api/logout clears the token cookie.
User is redirected back to /login.
