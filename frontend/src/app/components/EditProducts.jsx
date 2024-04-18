"use client";
import React, { useEffect, useState } from 'react'
import { editProductHandler } from '../actions/editProductHandler';
import Image from 'next/image'
import ImageWithDeleteButton from './ImageWithDeleteButton';
import FileInput from './FileInput';


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
                                        <div className="imgsHolder" style={{flexDirection: "row",gridGap: "10px",flexWrap: "wrap"}}>
                                            {JSON.parse(data["images"]).map((image, index)=>(
                                                <ImageWithDeleteButton imageUrl={image} productId={theeeId}/>
                                            ))}
                                                {/* <div className="relative inline-block w-10 h-10 rounded-full bg-[#5AC9F4] self-center cursor-pointer overflow-hidden">
                                                    <input
                                                        type="file"
                                                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-white"></div>
                                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-white"></div>
                                                    </div> */}
                                                <FileInput/>
                                        </div>

                                    </div>
                                )  
                                :(
                                    <input type="text" defaultValue={data[key]} name={key} disabled={key==="old_price" || key==="pending"||key==="created_at"||key==="product_id"||key==="sub_category"||key==="category"||key==="posted_by"&&true}/>
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
