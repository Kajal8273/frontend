# Task Management Application

## Description
A simple Task Management Application that allows users to create, read, update, and delete tasks.

## Technologies
- Backend: Node.js, Express, Mongoose
- Frontend: React, Axios

## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```sh
    npm start
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Access the Application
Open your browser and go to `http://localhost:3000`.

## Usage
- Add tasks with a title, description, and due date.
- View detailed information of each task.
- Edit existing tasks.
- Delete tasks.
