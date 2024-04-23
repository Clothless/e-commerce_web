"use server"

import { redirect } from "next/navigation";
import { NextResponse } from 'next/server'

export async function signup(formdata){
    const data = {
        "first_name" :  formdata.get("first_name"),
        "last_name" :  formdata.get("last_name"),
        "address": "",
        "phone_number":"",
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
    
    let senddata = await fetch("http://localhost:3080/users/add",{
        method:"post",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },  
        body:formBody
    })
    let msg = await senddata.json();
    if(msg.message === 'User added successfully'){
        redirect('http://localhost:3000/login')
    }
    // console.log(senddata.ok);
}