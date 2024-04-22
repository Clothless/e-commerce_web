"use server"

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(formdata){
    const data = {
        "email" : formdata.get("email"),
        "password" : formdata.get("password")
    }
    
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    let senddata = await fetch("http://localhost:3080/users/login",{
        method:"post",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },  
        body:formBody
    })
    let user = await senddata.json()
    if(user){
        await createSession(user[0].user_id)
        redirect('http://localhost:3000/')
    }
}