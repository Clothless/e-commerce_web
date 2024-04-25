import React, { useState } from 'react';

const OneImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <label
        htmlFor="file-input"
        className="flex justify-center items-center w-64 h-64 rounded-lg border-2 border-dashed border-gray-400 cursor-pointer"
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <i className="fa fa-camera text-3xl mb-2"></i>
            <span className="text-sm">Click to upload</span>
          </div>
        )}
        <input
          id="file-input"
          type="file"
          accept="image/*"
          name='image'
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default OneImageUploader;