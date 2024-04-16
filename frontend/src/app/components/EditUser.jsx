"use client";
import React, { useEffect, useState } from 'react'

export default function EditUser({theeeId}) {
    console.log(theeeId);
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3080/users/1`,{
            headers:{
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }
        })
        .then(res=>res.json())
        .then(rows=>setData(rows[0]))
    },[theeeId])
  return (
    <div className="edit editUser">
        <form action="">
            {Object.keys(data).length>0&&(
                Object.keys(data).map((key,index)=>{
                    return <label htmlFor="">{key}</label>
                })
            )}
        </form>
    </div>
  )
}
