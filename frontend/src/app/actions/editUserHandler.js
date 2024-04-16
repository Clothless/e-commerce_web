"use server";
export async function editUserHandler(formData){
    "use server";
    const rawData = {
        fname: formData.get("first_name"),
        lname:formData.get("last_name"),
        address:formData.get("address"),
        phoneNum:formData.get("phone_number"),
        email:formData.get("email"),
        password:formData.get("password"),
        role:formData.get("role"),
        wilaya:formData.get("wilaya")
    }
    fetch(`http://localhost:3080/users/edit/1}`,{
        method:"post",
        body: rawData
    }).then(res=>res.json())
    .then(msg=> console.log(msg.message))
}