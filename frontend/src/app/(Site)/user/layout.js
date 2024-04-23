import SpecialTitle from "@/app/components/SpecialTitle";
import './user.css'
import Link from 'next/link'
import ClientImage from "@/app/components/ClientImage";
import UserSide from "@/app/components/UserSide";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

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
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);
    // let newuser = {
    //     first_name: 'John',
    //     last_name: 'Doe',
    //     address: '123 Main St',
    //     phone_number: '555-123-4567',
    //     email: 'john.doe@example.com',
    //     password: 'password123',
    //     wilaya: '46'
    //   }  
    const res0 = await fetch(`http://localhost:3080/users/${session.sessionId}`)
    const user0 = await res0.json();
    console.log(user0);
      const res = await fetch(`http://localhost:3080/auth`)
      const user = await res.json();
  return (
    <div className="profile">
        <div className="container">
            <SpecialTitle title={"Profile"}/>
            <div className="content">
                <UserSide userid={user0[0].user_id} img={user0[0].image?user0[0].image:'/userr.png'} username={user0[0].first_name+" "+user0[0].last_name}/>
                {children}
            </div>
        </div>
    </div>
  );
}