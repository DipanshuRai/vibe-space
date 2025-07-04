import express from 'express';
import {Server} from 'socket.io';
import http from 'http';

const app=express();
const server=http.createServer(app);

const io=new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
});

export const getReceiverSocketId=(userId)=>{
    return userSocketMap[userId];
}

// Store online users
const userSocketMap={}; // {userId: socketId}

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id}`);
    const userId=socket.handshake.query.userId;
    if(userId){
        userSocketMap[userId]=socket.id;
    }

    // Send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", ()=>{
        console.log(`User disconnected: ${socket.id}`);
        delete userSocketMap[socket.id];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
});

export {io, app, server};