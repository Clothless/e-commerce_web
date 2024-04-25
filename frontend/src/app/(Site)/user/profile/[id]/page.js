import ClientImage from "@/app/components/ClientImage"
import EditImage from "@/app/components/EditImage"
import EditUserModal from "@/app/components/EditUserModal";
import { cookies } from "next/headers"

export default async function page({params}) {
  const {id} = params;
  const res = await fetch(`http://localhost:3080/users/${id}`)
  let data = await res.json();
  data = data[0]
  let nope = ["user_id","password", "role","image"]
  let wilaya = null
  if(data.wilaya){
    const res2 = await fetch(`http://localhost:3080/users/wilaya/${data.wilaya}`)
    wilaya = await res2.json();
  }
  // const res2 = await fetch(`http://localhost:3080/users/wilaya/${data.wilaya}`)
  // const wilaya = await res2.json();
  // console.log(wilaya);
  return (
    <div className="profilePage">
      <h2>Personal Information</h2>
      <div className="top">
        <EditImage image={data.image?data.image : '/big-user.png'}/>
        <EditUserModal userId={data.user_id} firstName={data.first_name} lastName={data.last_name} address={data.address} phone={data.phone_number} email={data.email} wilaya={data.wilaya} pass={data.password}/>
      </div>
      <div className="infos">
        {Object.keys(data).length>0&&(
            Object.keys(data).map((key,index)=>{
                return (
                    !(nope.includes(key))&&
                    <div key={index}>
                        <label htmlFor="">{key.split("_").join(" ")}:</label>
                        <input type="text" defaultValue={key==="wilaya"?`-${wilaya?wilaya.wilaya_code:""}- ${wilaya?wilaya.wilaya_name:""}`: data[key]} name={key} disabled={true}/>
                    </div>
                )
            })
        )}
      </div>
    </div>
  )
}
