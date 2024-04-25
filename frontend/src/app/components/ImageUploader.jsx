import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([null, null, null, null]);

  const handleFileChange = (event, index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = event.target.files[0];
    setSelectedFiles(newSelectedFiles);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {[0, 1, 2, 3].map((index) => (
        <label
          key={index}
          htmlFor={`file-input-${index}`}
          className="flex justify-center items-center h-[150px] rounded-lg border-2 border-dashed border-gray-400 cursor-pointer"
        >
          {selectedFiles[index] ? (
            <img
              src={URL.createObjectURL(selectedFiles[index])}
              alt="Selected"
              className="w-full h-full rounded-lg object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <i className="fa fa-camera text-3xl mb-2"></i>
              <span className="text-sm">Click to upload</span>
            </div>
          )}
          <input
            id={`file-input-${index}`}
            type="file"
            name='images[]'
            accept="image/*"
            onChange={(event) => handleFileChange(event, index)}
            className="hidden"
          />
        </label>
      ))}
    </div>
  );
};

export default ImageUploader;