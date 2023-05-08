import React from 'react';

import "./chat.css";

import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import Sidebar from './components/layouts/sidebar/Sidebaruser';

const socket = io.connect("http://localhost:3001");

function CH() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <> 
    <Sidebar />
    <iframe src="http://localhost:3000/login" width="80%" style={{marginLeft: 250}} height="100%" ></iframe>
    </>
  );
}

export default CH;
