"use server"

import { redirect } from "next/navigation";

export async function signup(formdata){
    'use server';
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
    console.log(formBody)
    
    let senddata = await fetch("http://localhost:3080/users/add",{
        method:"post",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },  
        body:formBody
    })
    // console.log(senddata.ok);
    redirect("/");
}

export async function login(formdata){
    'use server';
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
    }).then(res => res.json())
    .then(user => console.log(user))
    // console.log(senddata.ok);
    redirect("/");
}