"use server";
import { redirect } from 'next/navigation'
export async function acceptProduct(id){
    const res = await fetch(`http://localhost:3080/products/approve/${id}`,{
        method:"put"
    })
    const msg = await res.json();
    redirect("/moderator")
}