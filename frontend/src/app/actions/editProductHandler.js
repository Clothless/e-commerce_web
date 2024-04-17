"use server";
export async function editProductHandler(formData){
    "use server";
    let id = formData.get("productId");
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
    console.log(rawData);
  try {
    const response = await fetch(`http://localhost:3080/products/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)
    });

    const msg = await response.json();
    console.log(msg.message);
  } catch (err) {
    console.error("Error updating product:", err);
  }
}