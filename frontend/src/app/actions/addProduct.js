"use server";
import { revalidateTag } from 'next/cache'
export async function addProduct(formData){
    "use server";
    // console.log(formData.get("images"));

    // const res3 = await fetch(`http://localhost:3080/`)/

    let imgs = formData.getAll("images[]");
    imgs = imgs.filter((file)=>file["name"]!=="undefined")
    let imgss = []
    const formdataa = new FormData()
    for(let img of imgs){
        formdataa.append("images", img)
    }
    // console.log(formdataa);
    const res = await fetch(`http://localhost:3080/images/upload`,
    {
      method:"post",
      body:formdataa
    })
    const uploadedImage = await res.json();
    const rawData = {
      name: formData.get("name"),
      description:formData.get("description"),
      sub_category:parseInt(formData.get("sub_category")),
      shipping:parseInt(formData.get("shipping")),
      price:parseFloat(formData.get("price")),
      // category:formData.get("category"),
      category:3,
      posted_by: 11,
      images: JSON.stringify(uploadedImage.images)
    }
    console.log(rawData);
  try {
    const response = await fetch(`http://localhost:3080/products/add`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)

    });

    const msg = await response.json();
  } catch (err) {
    console.error("Error added product:", err);
  }
}