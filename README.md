#  Full Stack Application with Secure Authentication and Role Based Access

# Project Overview

This project is a full stack web application developed as part of the Backend Developer Intern assignment.
The application demonstrates secure authentication using JWT, role based access control, CRUD operations, and frontend backend integration.
The project is structured as a monorepo with two separate folders, one for the backend and one for the frontend.

# Repository Structure

PrimeTrade-Intern-Assignment : 
Prime_backend - backend built using FastAPI and PostgreSQL ,
Prime_frontend - frontend built using React and Vite 

# Technology Stack

Backend technologies used are Python, FastAPI, PostgreSQL, SQLAlchemy, JWT authentication, Passlib for password hashing, Uvicorn ASGI server ,,
Frontend technologies used are React.js, Vite, Axios, HTML, CSS ,,
Database used is PostgreSQL ,, 
Version control is done using Git and GitHub .

# Backend Setup Instructions
# Prerequisites for Backend
Python version 3.10 is required.
This project is tested and stable on Python 3.10.
Newer versions such as Python 3.13 are not supported due to
dependency compatibility issues with bcrypt and PostgreSQL drivers.

You must have the following installed on your system before running the backend.
1) Python version 3.10 only , 
2) PostgreSQL database , 
3) Git ,
4) Command Prompt or Terminal .

 #  Important Environment Notes

This backend uses bcrypt for password hashing.
bcrypt has strict compatibility requirements with Python versions.

To avoid runtime errors:
- Use Python 3.10 only,
- Create the virtual environment explicitly using Python 3.10,
- Do not use Python 3.13 or newer for this project.

Example command:
py -3.10 -m venv venv


# Step 1: Install PostgreSQL

Download PostgreSQL from the official website
https://www.postgresql.org/download/

During installation, remember the following details carefully,
PostgreSQL username, usually postgres ,
PostgreSQL password, this will be used in the environment file ,
PostgreSQL port, default is 5432 ,

After installation, ensure PostgreSQL service is running.

# Step 2: Create Database

Open pgAdmin or psql terminal.

Create a new database using the following command.

CREATE DATABASE intern_assignment;

This database will be used by the backend application.

# Step 3: Navigate to Backend Folder

Open terminal and move to the backend folder.

cd PrimeTrade-Intern-Assignment
cd Prime_backend

# Step 4: Create Virtual Environment

Create a Python virtual environment.

python -m venv venv


Activate the virtual environment.

For Windows:

venv\Scripts\activate

# Step 5: Install Backend Dependencies

Install required Python packages.

pip install -r requirements.txt


If requirements.txt is not present, install manually.

pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose passlib[bcrypt] python-dotenv

# Step 6: Create .env File for Backend

Inside Prime_backend folder, create a file named .env.

type nul > .env


Add the following content to the .env file.

DATABASE_URL=postgresql://postgres:YOUR_DATABASE_PASSWORD@localhost:5432/intern_assignment
SECRET_KEY=your_secret_key_here


Replace YOUR_DATABASE_PASSWORD with your actual PostgreSQL password.

The .env file is required for database connection and JWT token security.

# Step 7: Run Backend Server

Start the FastAPI backend using Uvicorn.

uvicorn app.main:app --reload


If the server starts successfully, you should see the FastAPI server running at http://127.0.0.1:8000.

# Step 8: Verify Backend APIs

Open your browser and go to:

http://127.0.0.1:8000/docs


Swagger UI will open, allowing you to test authentication APIs and task APIs.

# Frontend Setup Instructions
Prerequisites for Frontend

Node.js version 18 or above is required to run the React development server and manage frontend dependencies using npm.
npm package manager ,
Git .

# Step 1: Navigate to Frontend Folder

Open terminal and move to the frontend folder.

cd PrimeTrade-Intern-Assignment
cd Prime_frontend

# Step 2: Install Frontend Dependencies

Install required npm packages.

npm install

# Step 3: Verify Backend API URL in Frontend

Open the following file:

Prime_frontend/src/services/api.js


Ensure the backend base URL is configured correctly.

http://127.0.0.1:8000/api/v1


This URL is used by the frontend to communicate with the backend.

# Step 4: Run Frontend Application

Start the React development server.

npm run dev


The frontend will be available at:

http://localhost:5173

# Password Security Notes

Passwords are hashed using bcrypt.
bcrypt has a maximum input size of 72 bytes.

To ensure stability and prevent runtime errors,
passwords are truncated to 72 bytes before hashing and verification.

# Tested Environment

Operating System: Windows 10 / Windows 11
Python Version: 3.10.x
Node.js Version: 18.x
PostgreSQL Version: 14+



# Application Usage

1 ) Register a new user using the Register page ,
2) Login using registered email and password ,
3) After login, user is redirected to the dashboard ,
4 )User can create new tasks,
5) User can edit existing tasks,
6) User can delete tasks ,
7) All task operations are protected using JWT authentication ,

Admin users can view all tasks, regular users can view only their own tasks.

# Authentication and Security

1) Passwords are hashed using bcrypt ,
2)JWT tokens are generated on successful login,
3)Protected routes require Bearer token authorization,
4)Role based access is implemented using dependency injection,
5)CORS is enabled for frontend backend communication .

# Scalability and Design Considerations

Stateless JWT authentication allows horizontal scaling
Database schema supports future entity expansion
Backend follows modular architecture
API versioning is implemented using /api/v1
Caching can be added using Redis
Load balancing can be added for high traffic scenarios

# Git Repository Structure

This project uses a monorepo structure.

Both frontend and backend exist in the same repository as separate folders.

No environment files or dependencies are pushed to GitHub.

# How to Stop the Application

To stop backend server, press Ctrl + C in backend terminal
To stop frontend server, press Ctrl + C in frontend terminal

# Conclusion

This project demonstrates a complete full stack application with secure backend APIs, clean frontend integration, proper authentication, and professional repository structure.
It is designed to be scalable, maintainable, and production ready.
