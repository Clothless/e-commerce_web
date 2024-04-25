"use server";
import { revalidateTag } from 'next/cache'

export async function editAdminHandler(formData){
    "use server";
    let id = formData.get("adminId");
    const rawData = {
        first_name: formData.get("first_name"),
        last_name:formData.get("last_name"),
        address:formData.get("address"),
        phone_number:formData.get("phone_number"),
        email:formData.get("email"),
        role:formData.get("role"),
        wilaya:formData.get("wilaya"),
    }

  try {
    const response = await fetch(`http://localhost:3080/admins/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)
    });

    const msg = await response.json();
    console.log(msg);
    if(msg.message === "Admin updated successfully"){
      revalidateTag("admin")
    }
  } catch (err) {
    console.error("Error updating admin:", err);
  }
}