import SpecialTitle from "@/app/components/SpecialTitle";
import './user.css'
import Link from 'next/link'
import ClientImage from "@/app/components/ClientImage";
import UserSide from "@/app/components/UserSide";

export default async function UserLayout({ children }) {
    // const {id} = params
    // const res = await fetch(`http://localhost:3080/users/${id}`)
    // let user = await res.json();
    // let newuser = Object.keys(user[0]).filter(objKey => objKey!=='user_id').filter(objKey=>objKey!=='role').reduce((newObj, key) =>
    //     {
    //         newObj[key] = user[0][key];
    //         return newObj;
    //     }, {}
    // );
    // console.log(newuser); 
    let newuser = {
        first_name: 'John',
        last_name: 'Doe',
        address: '123 Main St',
        phone_number: '555-123-4567',
        email: 'john.doe@example.com',
        password: 'password123',
        wilaya: '46'
      }  
      const res = await fetch(`http://localhost:3080/auth`)
      const user = await res.json();
  return (
    <div className="profile">
        <div className="container">
            <SpecialTitle title={"Profile"}/>
            <div className="content">
                <UserSide userid={1} img={newuser.image?user.image:'/userr.png'} username={newuser.first_name+" "+newuser.last_name}/>
                {children}
            </div>
        </div>
    </div>
  );
}