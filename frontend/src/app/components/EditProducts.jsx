"use client";
import React, { useEffect, useState } from 'react'
import { editProductHandler } from '../actions/editProductHandler';


export default function EditProducts({theeeId}) {
    console.log(theeeId);
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3080/products/${theeeId}`,{
            headers:{
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }
        })
        .then(res=>res.json())
        .then(rows=>setData(rows.product[0]))
    },[theeeId])
    // console.log('rani hna');
    // console.log(Array.from(data["images"]));
    // const editUserHandlerWithId = editUserHandler.bind(null, Object.keys(data)[0])

    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageSelect = (image) => {
      setSelectedImage(image);
    };


  return (
    <div className="edit editProduct">
        <form action={editProductHandler} method='dialog'>
            {Object.keys(data).length>0&&(
                Object.keys(data).map((key,index)=>{
                    return (
                        <div key={index}>
                            <label htmlFor="">{key.split("_").join(" ")}:</label>
                            {
                                key==="images"?
                                (
                                    <div className='imgs'>
                                        <div className="imgsHolder">
                                            {JSON.parse(data["images"]).map((image, index)=>(
                                                <div key={index} onClick={() => handleImageSelect(image)}>
                                                    <img src={image} alt={`Product Image ${index}`} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="files">
                                            {
                                                selectedImage && (
                                                    <div>
                                                        {/* <img src={selectedImage} alt="Selected" /> */}
                                                        <input
                                                        type="file"
                                                        onChange={(event) => setSelectedImage(event.target.files[0])}
                                                        />
                                                    </div>
                                                    )
                                            }
                                        </div>

                                    </div>
                                )  
                                :(
                                    <input type="text" defaultValue={data[key]} name={key} disabled={key==="product_id"&&true}/>
                                )
                            }
                        </div>
                    )
                })
            )}
            <input type="hidden" name='productId' value={data["product_id"]} />
            <div className="btns">
                <input type="submit" value={"Edit"} />
                {/* <button onClick={()=>handleClose(false)}>closeeeee</button> */}
            </div>
        </form>
    </div>
  )
}
