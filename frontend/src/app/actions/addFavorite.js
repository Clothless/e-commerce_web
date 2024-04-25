"use server";
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
export async function addFavorite(productid,userid){
    if(!userid){
        redirect('http://localhost:3000/login')
    }
    console.log(productid,userid);
    const res = await fetch(`http://localhost:3080/products/favorite/${productid}?user_id=${userid}`,{
        method:"post"
    })
    const msg = await res.json();
    console.log(msg);
}