"use server";
export async function editUserHandler(formData){
    "use server";
    let id = formData.get("userId");
    const rawData = {
        first_name: formData.get("first_name"),
        last_name:formData.get("last_name"),
        address:formData.get("address"),
        phone_number:formData.get("phone_number"),
        email:formData.get("email"),
        password:formData.get("password"),
        role:formData.get("role"),
        wilaya:formData.get("wilaya")
    }

  try {
    const response = await fetch(`http://localhost:3080/users/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)
    });

    const msg = await response.json();
  } catch (err) {
    console.error("Error updating user:", err);
  }
}