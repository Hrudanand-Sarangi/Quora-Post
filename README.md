# Quora-Like Mini Project (REST API)

## 📌 Project Overview
This project is a **Quora-like** platform where users can add post, view post, and delete post. The focus is on implementing **RESTful APIs** using Express.js to handle different functionalities like authentication, CRUD operations, and error handling.

## 🚀 Features
- User Authentication (Signup/Login)
- CRUD operations for Questions & Answers
- Middleware for Authentication & Error Handling
- API Endpoints for User Interactions

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/quora-mini-project.git
   cd quora-mini-project
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file and set up required variables:
   ```sh
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the Server**
   ```sh
   npm start
   ```
   The server will run at `http://localhost:8080`

## 📡 API Endpoints

### **Questions**
- **Get All Questions:** `GET /api/questions`
- **Post a Question:** `POST /api/questions` (Authenticated)
- **Delete a Question:** `DELETE /api/questions/:id` (Authenticated)

### **Answers**
- **Get Answers for a Question:** `GET /api/questions/:id/answers`
- **Post an Answer:** `POST /api/questions/:id/answers` (Authenticated)

## 🏗️ Built With
- **Node.js** & **Express.js** (Backend Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **JWT (JSON Web Token)** (Authentication)
