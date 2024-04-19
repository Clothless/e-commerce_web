"use server";
import { redirect } from 'next/navigation'
export async function rejectProduct(id){
    const res = await fetch(`http://localhost:3080/products/${id}`,{
        method:"delete"
    })
    const msg = await res.json();
    console.log(msg);
    redirect("/moderator")
}