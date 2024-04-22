"use server";
import { redirect } from 'next/navigation'
export async function searchProduct(formData){
    const query = formData.get("search")
    redirect(`/search?name=${query}`)
}