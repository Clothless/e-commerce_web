"use server";
import { revalidateTag } from 'next/cache'
export async function editProductHandler(formData){
    "use server";
    // console.log(formData.get("images"));
    const formdataa = new FormData()
    formdataa.append("images", formData.get("images"))
    // console.log(formdataa);
    const res = await fetch(`http://localhost:3080/images/upload`,
    {
      method:"post",
      body:formdataa
    })
    const uploadedImage = await res.json();
    let id = formData.get("productId");
    const rawData = {
      name: formData.get("name"),
      description:formData.get("description"),
      price:formData.get("price"),
      // category:formData.get("category"),
      images: uploadedImage.images? JSON.stringify([...JSON.parse(formData.get("previousImages")),...uploadedImage.images]):JSON.stringify([...JSON.parse(formData.get("previousImages"))])
    }
  try {
    const response = await fetch(`http://localhost:3080/products/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)

    });

    const msg = await response.json();
    if(msg.message === 'Product updated successfully'){
      revalidateTag('products')
    }
  } catch (err) {
    console.error("Error updating product:", err);
  }
}