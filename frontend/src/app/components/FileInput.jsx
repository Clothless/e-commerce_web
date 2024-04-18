"use client";
import React, { useState } from 'react';

const FileInput = (props) => {
  const [hasFile, setHasFile] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setHasFile(true);
    } else {
      setHasFile(false);
    }
    // props.onChange(event);
  };

  return (
    <div
      className={`relative inline-block w-10 h-10 rounded-full cursor-pointer overflow-hidden self-center ${
        hasFile ? 'bg-green-500' : 'bg-blue-500'
      }`}
    >
      <input
        type="file"
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileChange}
        name='images'
        {...props}
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-1 ${
          hasFile ? 'bg-white' : 'bg-white'
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-5 ${
          hasFile ? 'bg-white' : 'bg-white'
        }`}
      ></div>
    </div>
  );
};

export default FileInput;