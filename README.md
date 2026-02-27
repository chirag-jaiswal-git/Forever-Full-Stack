🚀 Forever Full Stack
Production-Oriented MERN Application with Secure Authentication & API Architecture

A full-stack web application built using the MERN stack, implementing secure authentication, protected routes, and scalable backend architecture following industry best practices.

Designed to demonstrate backend fundamentals, API design, JWT security, state management, and full-stack integration.

🎯 Project Objective

To build a secure, scalable client-server application that:
Implements JWT-based authentication
Follows MVC architecture
Enforces protected routes
Handles real-world HTTP status codes (400, 401, 500)
Demonstrates full-stack integration

🧠 Technical Highlights

🔐 JWT-based Authentication & Authorization
🔑 Password hashing using bcrypt
🛡 Middleware-based route protection
📦 RESTful API design
⚡ Axios client-server communication
🌐 Context API for global state management
🧱 Modular folder structure (MVC pattern)
🔒 Environment variable configuration
📊 Proper HTTP status code handling

🏗 System Architecture

Client (React)
     ↓
Axios HTTP Requests
     ↓
Express Server (Node.js)
     ↓
Auth Middleware (JWT Verification)
     ↓
MongoDB Database (Mongoose ODM)

🔐 Authentication Flow
User registers → password hashed (bcrypt)
User logs in → server generates signed JWT
Token stored in localStorage
Token attached in request headers
Backend verifies JWT signature
Unauthorized requests return 401 Unauthorized

📂 Project Structure
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── server.js

frontend/
 ├── components/
 ├── pages/
 ├── context/
 └── App.jsx
 
📡 API Endpoints
Method	Endpoint	Access
POST	/api/user/register	Public
POST	/api/user/login	Public
GET	/api/user/profile	Protected

🛡 Security & Best Practices
JWT signature validation
Secret keys stored in .env
Password hashing using bcrypt
Centralized error handling
Protected API middleware
No secret keys committed to GitHub
Proper Git branching & commit workflow

🛠 Tech Stack

Frontend
React (Hooks)
Context API
React Router
Axios
Tailwind CSS

Backend
Node.js
Express.js
MongoDB
Mongoose
JSON Web Token
bcrypt
dotenv

🚀 Deployment Ready

Frontend: Vercel

Backend: Vercel

Database: MongoDB Atlas

Environment variables configured securely for production deployment.
