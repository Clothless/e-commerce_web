"use server";
export async function deleteImage(imageUrl,productId){
    "use server";
    // const imageUrl = formData.get("imgUrl");
    // const productId = formData.get("productId");

    const rawData = {
        image: imageUrl
    }

  try {
    const response = await fetch(`http://localhost:3080/products/deleteImage/${productId}?image=${imageUrl}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    //   body: `image=${imageUrl}`
    });

    const msg = await response.json();
  } catch (err) {
    console.error("Error deleting image:", err);
  }
}