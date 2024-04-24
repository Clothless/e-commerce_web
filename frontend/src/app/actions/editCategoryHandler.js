"use server";
export async function editCategoryHandler(formData){
    "use server";
    let id = formData.get("categoryId");
    const rawData = {
        name:formData.get('name')
    }
    // console.log(rawData);
  try {
    const response = await fetch(`http://localhost:3080/categories/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)

    });

    const msg = await response.json();
  } catch (err) {
    console.error("Error updating categories:", err);
  }
}