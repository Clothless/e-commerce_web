"use client";
import React, { useEffect, useState } from 'react'
import ImageWithDeleteButton from './ImageWithDeleteButton';
import { editAdminHandler } from '../actions/editAdminHandler';


export default function EditAdmin({theeeId}) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3080/admins/${theeeId}`,{next:{tags:["admin"]}},{
            headers:{
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }
        })
        .then(res=>res.json())
        .then(rows=>setData(rows[0]))
    },[theeeId])


    // const editUserHandlerWithId = editUserHandler.bind(null, Object.keys(data)[0])



  return (
    <div className="edit editAdmin">
        <form action={editAdminHandler} method='dialog'>
            {Object.keys(data).length>0&&(
                Object.keys(data).map((key,index)=>{
                    return (
                        // <div key={index}>
                        //     <label htmlFor="">{key.split("_").join(" ")}:</label>
                        //     <input type="text" defaultValue={data[key]} name={key} disabled={(key==="user_id"||key==="password")&&true}/>
                        // </div>
                        <div key={index}>
                            {
                                data[key]!==null
                                &&<label htmlFor="">{key.split("_").join(" ")}:</label>
                            }
                            {
                                key==="image" ?
                                    data["image"] !== null
                                    ?
                                    (
                                        <div className='imgs'>
                                            <div className="imgsHolder" style={{flexDirection: "row",gridGap: "10px",flexWrap: "wrap"}}>
                                                <ImageWithDeleteButton imageUrl={data["image"]} daId={theeeId}/>
                                                {/* {).map((image, index)=>(
                                                ))} */}
                                                    {/* <div className="relative inline-block w-10 h-10 rounded-full bg-[#5AC9F4] self-center cursor-pointer overflow-hidden">
                                                        <input
                                                            type="file"
                                                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                                        />
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-white"></div>
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-white"></div>
                                                        </div> */}
                                                    {/* <FileInput/> */}
                                            </div>

                                        </div>
                                    )
                                    :(<wbr/>)  
                                :(
                                    <input type="text" defaultValue={data[key]} name={key} disabled={key==="user_id" || key==="password"&&true}/>
                                )
                            }
                        </div>
                    )
                })
            )}
            <input type="hidden" name='adminId' value={data["user_id"]} />
            <div className="btns">
                <input type="submit" value={"Edit"} className='flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent bg-[#ff9200] rounded-lg' />
                {/* <button onClick={()=>handleClose(false)}>closeeeee</button> */}
            </div>
        </form>
    </div>
  )
}