"use server"

import { redirect } from "next/dist/server/api-utils";

export async function signup(formdata){
    'use server';
    const first_name =  formdata.get("firstName");
    const last_name =  formdata.get("lastName");
    const email = formdata.get("email");
    const password = formdata.get("password");
    let senddata = await fetch("http://localhost:3080/account/add",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },  
        body:JSON.stringify({first_name, last_name, email, password})
    })
    let result = await senddata.json();
    console.log(result)
    // redirect("/");
}