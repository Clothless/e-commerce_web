"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { deleteImage } from '../actions/deleteImage';

const ImageWithDeleteButton = ({ imageUrl,productId }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    // Add your delete logic here
    setShowDeletePopup(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  return (
    <div style={{ position: 'relative',width:"150px" }}>
      <Image width={150} height={150} loader={()=>imageUrl} src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%',borderRadius:"7px" }} />
      <button
        onClick={handleDeleteClick}
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius:"50%",
          color: 'white',
          border: 'none',
          padding: '7px',
          cursor: 'pointer',
        }}
      >
        <img src="/trash.png" alt="" style={{width:"15px"}} />
      </button>
      {showDeletePopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <h3>Are you sure you want to delete this image?</h3>
            <div style={{ marginTop: '20px',flexDirection:"row" }}>
              <button onClick={async()=>{
                handleConfirmDelete();
                const res = await deleteImage(imageUrl,productId)
              }} style={{ fontWeight:"500",color:"white",borderRadius:"7px",marginRight: '10px',backgroundColor:"#e82e2e",padding:"5px 10px" }}>
                Confirm
              </button>
              <button style={{padding:"5px 10px",color:"#202020",border:"2px solid #202020",fontWeight:"500",borderRadius:"7px"}} onClick={handleCancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithDeleteButton;