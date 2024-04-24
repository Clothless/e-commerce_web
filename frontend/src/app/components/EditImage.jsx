"use client";
import React, { useState } from 'react';
import ClientImage from './ClientImage';

const EditImage = ({image}) => {
  const [imageFile, setImageFile] = useState(image);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <form action="">
        <div style={{ position: 'relative', display: 'inline-block' }}>
        {imageFile && (
            <img
            src={image}
            alt="Uploaded"
            style={{ maxWidth: '100px', borderRadius: '50%' }}
            />
        )}
        <label
            htmlFor="image-upload"
            style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#ff9200',
            color: 'white',
            borderRadius: '50%',
            padding: '5px 5px 6px 5px',
            cursor: 'pointer',
            display:"grid",
            placeItems:"center"
            }}
        >
            <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            />
            <ClientImage classn={"edit"} src={"/edit.png"} style={{width:"20px",height:"20px",objectFit:"contain"}}/>
        </label>
        </div>
    </form>
  );
};

export default EditImage;