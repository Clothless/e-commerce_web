"use server";
import { redirect } from 'next/navigation'
export async function searchPending(formData){
    const search = formData.get("searchPending")
    redirect(`/moderator?name=${search}`)
}