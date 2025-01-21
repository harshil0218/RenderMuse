import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
function Input() {
  return (
 
    <div className="w-full max-w-lg md:w-xl lg:w-2xl mx-auto p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <textarea
          className="input join-item flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white resize-none"
          placeholder="What is in your mind?"
          rows={1}
          maxLength="500"
          style={{ overflow: 'hidden', minHeight: '2.5rem', maxHeight: '10rem' }} // Adjust minHeight and maxHeight as needed
        />
        <button className="btn btn-outline btn-secondary join-item px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
          <SendRoundedIcon />
        </button>
      </div>
    </div>

   

  );
}

export default Input;
