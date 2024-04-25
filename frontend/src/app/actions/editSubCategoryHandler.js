"use server";
import { revalidatePath } from 'next/cache'
export async function editSubCategoryHandler(formData){
    "use server";
    let id = formData.get("categoryId");
    const rawData = {
        name:formData.get('name')
    }
    // console.log(rawData);
  try {
    const response = await fetch(`http://localhost:3080/sub_categories/update/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawData)

    });

    const msg = await response.json();
    console.log(msg);
  } catch (err) {
    console.error("Error updating sub categories:", err);
  }
}