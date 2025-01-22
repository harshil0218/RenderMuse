import React, { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
const conversation = [
  { type: "text", content: "Hello, how are you?", sender: false },
  {
    type: "image",
    content:
      "/api/photos/30321918/pexels-photo-30321918/free-photo-of-elegant-vase-with-floral-arrangement-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "I am good, thanks!", sender: false },
  {
    type: "image",
    content:
      "/api/photos/30228470/pexels-photo-30228470/free-photo-of-empire-state-building-framed-by-manhattan-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "Hello, how are you?", sender: false },
  {
    type: "image",
    content:
      "/api/photos/30183849/pexels-photo-30183849/free-photo-of-minimalist-interior-with-black-vase-and-textured-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
  { type: "text", content: "I am good, thanks!", sender: false },
  {
    type: "image",
    content:
      "/api/photos/30228470/pexels-photo-30228470/free-photo-of-empire-state-building-framed-by-manhattan-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    sender: true,
  },
];

function MessageField({ conversation1 = [] }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentImage(null);
  };
  return (
    <div className="flex flex-col p-2 sm:px-4 md:px-8 lg:px-16 space-y-4 bg-white dark:bg-gray-800 overflow-y-auto">
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
            } rounded-lg  shadow max-w-sm`}
          >
            {msg.type === "text" ? (
              <p className="p-2">{msg.content}</p>
            ) : (
              <img
                src={msg.content}
                alt="Received"
                className="w-52 h-52 object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(msg.content)}
              />
            )}
          </div>
        </div>
      ))}

      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div className="relative">
            <img
              src={currentImage}
              alt="Popup"
              className="max-w-sm max-h-[60vh] rounded-lg"
            />
            <a
              href={currentImage}
              download
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <FileDownloadOutlinedIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageField;
