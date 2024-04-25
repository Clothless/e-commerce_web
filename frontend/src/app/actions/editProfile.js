"use server";
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
export async function editProfile(formData){
    const id = formData.get("userId")
    const rawData = {
        first_name: formData.get("first_name"),
        last_name:formData.get("last_name"),
        address:formData.get("address"),
        phone_number:formData.get("phone_number"),
        email:formData.get("email"),
        password:formData.get("password"),
        wilaya:parseInt(formData.get("wilaya"))
    }
    console.log(rawData);

    try {
        const response = await fetch(`http://localhost:3080/users/edit/${id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(rawData)
        });
    
        const msg = await response.json();
        console.log(msg);
        if(msg.message === "User updated successfully"){
            revalidateTag('userProfile')
        }
      } catch (err) {
        console.error("Error updating user profile:", err);
      }
}