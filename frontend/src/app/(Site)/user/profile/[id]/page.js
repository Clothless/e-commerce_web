import ClientImage from "@/app/components/ClientImage"
import EditImage from "@/app/components/EditImage"
import EditUserModal from "@/app/components/EditUserModal";
import { cookies } from "next/headers"

export default async function page({params}) {
  const {id} = params;
  const res = await fetch(`http://localhost:3080/users/${id}`)
  let data = await res.json();
  data = data[0]
  console.log("rani hna");
  // const res2 = await fetch(`http://localhost:3080/users/wilaya/${data.wilaya}`)
  // const wilaya = await res2.json();
  // console.log(wilaya);
  return (
    <div className="profilePage">
      <h2>Personal Information</h2>
      <div className="top">
        <EditImage image={data.image}/>
        <EditUserModal firstName={data.first_name} lastName={data.last_name} address={data.address} phone={data.phone_number} email={data.email} wilaya={data.wilaya}/>
      </div>
    </div>
  )
}
