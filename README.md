# Learnlink Backend (Node.js + Express + MongoDB)

## Prerequisites
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

## Setup

1. **Extract this ZIP**  
2. **Install dependencies**
    ```bash
    cd learnlink-backend
    npm install
    ```
3. **Configure environment**
   - Create `.env` file:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/learnlink
     JWT_SECRET=your_jwt_secret
     ```
4. **Start the server**
    ```bash
    npm start
    ```
5. **API will run at** `http://localhost:5000`

## Features
- Teacher & Student Auth (JWT)
- Posts: create, delete, like, comment
- Friend request system
- Real-time chat (Socket.io)