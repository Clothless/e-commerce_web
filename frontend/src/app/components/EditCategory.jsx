"use client";
import React, { useEffect, useState } from 'react'
import { editCategoryHandler } from '../actions/editCategoryHandler';


export default function EditCategory({theeeId}) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3080/categories/${theeeId}`,{
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
    <div className="edit editCategory">
        <form action={editCategoryHandler} method='dialog'>
            {Object.keys(data).length>0&&(
                Object.keys(data).map((key,index)=>{
                    return (
                        <div key={index}>
                            <label htmlFor="">{key.split("_").join(" ")}:</label>
                            <input type="text" defaultValue={data[key]} name={key} disabled={(key==="category_id"||key==="image")&&true}/>
                        </div>
                    )
                })
            )}
            <input type="hidden" name='categoryId' value={data["category_id"]} />
            <div className="btns">
                <input type="submit" value={"Edit"} className='flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent bg-[#ff9200] rounded-lg' />
                {/* <button onClick={()=>handleClose(false)}>closeeeee</button> */}
            </div>
        </form>
    </div>
  )
}