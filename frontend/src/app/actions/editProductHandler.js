"use server";
export async function editProductHandler(formData){
    "use server";
    let id = formData.get("productId");
    const rawData = {
        product:{
          name: formData.get("name"),
          description:formData.get("description"),
          price:formData.get("price"),
          category:formData.get("category")
        },
        Images: [formData.get("images")]
    }
    const formmData = new FormData();
    formmData.append("product", JSON.stringify({
      name: formData.get("name"),
      description:formData.get("description"),
      price:formData.get("price"),
      category:1
    }))
    formmData.append("images", [formData.get("images")])
    // console.log(rawData);
  try {
    const response = await fetch(`http://localhost:3080/products/edit/${id}`, {
      method: "put",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      body: formmData

    });

    const msg = await response.json();
  } catch (err) {
    console.error("Error updating product:", err);
  }
}