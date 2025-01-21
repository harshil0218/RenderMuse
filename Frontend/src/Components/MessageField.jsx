import React, { useState } from "react";
const conversation = [
  { type: "text", content: "Hello, how are you?", sender: false },
  {
    type: "image",
    content:
      "https://images.pexels.com/photos/30183849/pexels-photo-30183849/free-photo-of-minimalist-interior-with-black-vase-and-textured-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "I am good, thanks!", sender: false },
  {
    type: "image",
    content:
      "https://images.pexels.com/photos/30228470/pexels-photo-30228470/free-photo-of-empire-state-building-framed-by-manhattan-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "Hello, how are you?", sender: false },
  {
    type: "image",
    content:
      "https://images.pexels.com/photos/30183849/pexels-photo-30183849/free-photo-of-minimalist-interior-with-black-vase-and-textured-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "I am good, thanks!", sender: false },
  {
    type: "image",
    content:
      "https://images.pexels.com/photos/30228470/pexels-photo-30228470/free-photo-of-empire-state-building-framed-by-manhattan-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
];

function MessageField({ conversation1=[] }) {
  return (
    <div className="flex flex-col  p-2 sm:px-4 md:px-8 lg:px-16 space-y-4 bg-white dark:bg-gray-800 overflow-y-auto ">
      {conversation.map((msg, index) => (
        <div
          key={index}
          className={`flex items-center ${
            msg.sender ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`${
              msg.sender
                ? "bg-white dark:bg-gray-700 dark:text-gray-200"
                : "bg-blue-500 dark:bg-blue-700 text-white"
            } rounded-lg p-2 shadow max-w-sm`}
          >
            {msg.type === "text" ? (
              <p>{msg.content}</p>
            ) : (
              <img
                src={msg.content}
                alt="Received"
                className="w-52 h-52 object-cover rounded-lg" // Fixed size with object-cover
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageField;
