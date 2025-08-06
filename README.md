# 🍔 Food Delivery App

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to browse and order food from a restaurant. It features user authentication, a dynamic food catalog, a shopping cart, and an order history page.

## 🚀 Live Demo

You can view a live demo of the application here: **[Food Delivery App](https://food-delivery-app-e8ei.vercel.app/)**

**Note:** The application is currently in dark mode only. Light mode is a work in progress.

## ✨ Features

* **User Authentication:** Secure user registration and login system with JWT and password hashing.
* **Browse and Search:** Users can browse food items by category and search for specific dishes.
* **Shopping Cart:** A fully functional cart where users can add, remove, and update food items with different quantities and sizes.
* **Order Management:** Users can place orders and view their past order history on the "My Orders" page.
* **Responsive Design:** The application is built with Bootstrap to be responsive and work on various screen sizes.

## 🛠️ Technologies Used

### Frontend
* React.js
* Vite
* React Router DOM
* Bootstrap
* React Bootstrap
* React Icons

### Backend
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm installed
* MongoDB installed and running

### Backend Setup

1.  Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add your MongoDB connection string and a port number:
    ```env
    MONGO_URL=your_mongodb_connection_string
    PORT=5000
    ```
4.  Start the backend server:
    ```sh
    npm run dev
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory and add the URL of your backend server:
    ```env
    VITE_API_URL=http://localhost:5000
    ```
4.  Start the frontend development server:
    ```sh
    npm run dev
    ```

## 📸 Screenshots

## 📝 API Endpoints

* `POST /api/createuser`: Create a new user account.
* `POST /api/loginuser`: Log in an existing user.
* `POST /api/foodData`: Fetch all food items and categories.
* `POST /api/orderData`: Place a new order.
* `POST /api/myOrderData`: Fetch the order history for a user.


## 👨‍💻 Author

* **Ashik Hegde** - *Initial work* - [AshikAHegde](https://github.com/AshikAHegde)
