# Vibe Space

**Vibe Space** is a real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. It offers features like user authentication, one-on-one messaging, and responsive design, providing a seamless communication experience.

## 🚀 Features

- **User Authentication**: Secure sign-up and login using JWT.
- **Real-Time Messaging**: Instant messaging powered by Socket.IO.
- **One-on-One Chats**: Private conversations between users.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Profile Management**: Update profile pictures and user information.

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Real-Time Communication**: Socket.IO
- **Authentication**: JWT (JSON Web Tokens), bcrypt

## 📡 Live Demo

[Vibe Space Live Demo]([https://your-deployment-url.com](https://vibe-space-mnpa.onrender.com))

## ⚙️ Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or Atlas)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DipanshuRai/vibe-space.git
   cd vibe-space
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Set up backend environment variables**:

   Create a `.env` file in the `backend` directory with the following:

   ```env
   PORT=5000
   MONGODB_URI=""
   JWT_SECRET=""
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=""
   CLOUDINARY_API_KEY=""
   CLOUDINARY_API_SECRET=""
   ```

4. **Start the backend server**:

   ```bash
   npm run start
   ```

5. **Install frontend dependencies**:

   Open a new terminal window:

   ```bash
   cd frontend
   npm install
   ```

6. **Start the frontend development server**:

   ```bash
   npm run dev
   ```

7. **Access the application**:

   Open your browser and navigate to `http://localhost:5173`.

## 📦 Deployment

*Provide deployment instructions or links to deployed versions if available.*

## 📧 Contact

For any inquiries or feedback, please contact [dipanshurai933@gmail.com](mailto:dipanshurai933@gmail.com).
