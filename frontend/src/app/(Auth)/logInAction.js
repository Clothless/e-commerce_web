"use server"

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { cookies } from "next/headers"

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
    if(user.user){
        // const temp = senddata.headers.get("Set-Cookie");
        // console.log(temp.slice(42));
        // cookies().set({
        //     name: "connect.sid",
        //     ...decodeURIComponent(decodeURIComponent(temp.slice(53))),
            
        // })
        // const res = await fetch(`http://localhost:3080/users/api/session`)
        // const session = await res.json()
        // console.log(res.headers.get("set-cookie"));
        // console.log(session);
        // console.log(decodeURIComponent(res.headers.get("set-cookie")));
        await createSession(user.user.user_id)
        // const response =  NextResponse.redirect(new URL('http://localhost:3000/'))
        // response.cookies.set("session", decodeURIComponent(res.headers.get("set-cookie")))
        // return response;
        redirect('http://localhost:3000/')
    }
}