"use client";
import React, { useEffect, useState } from 'react'
import { editUserHandler } from '../actions/editUserHandler';


export default function EditUser({theeeId}) {
    console.log(theeeId);
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3080/users/${theeeId}`,{
            headers:{
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }
        })
        .then(res=>res.json())
        .then(rows=>setData(rows[0]))
    },[theeeId])

    // const editUserHandlerWithId = editUserHandler.bind(null, Object.keys(data)[0])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


  return (
    <div className="edit editUser">
        <form action={editUserHandler} method='dialog'>
            {Object.keys(data).length>0&&(
                Object.keys(data).map((key,index)=>{
                    return (
                        <div key={index}>
                            <label htmlFor="">{key.split("_").join(" ")}:</label>
                            <input type="text" defaultValue={data[key]} name={key} onChange={handleInputChange}/>
                        </div>
                    )
                })
            )}
            <div className="btns">
                <input type="submit" value={"Edit"} />
                {/* <button onClick={()=>handleClose(false)}>closeeeee</button> */}
            </div>
        </form>
    </div>
  )
}
