import AddProduct from "@/app/components/AddProduct";
import "../../user.css"
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import ProductTable from "@/app/components/ProductTable";

export default async function page({params}) {
    const res = await fetch(`http://localhost:3080/sub_categories`)
    let subs = await res.json();
    subs = subs.filter((sub)=>sub.category_id !== 404)

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
    const res0 = await fetch(`http://localhost:3080/users/${session.sessionId}`,{next:{tags:['userProfile']}})
    const user0 = await res0.json();

    console.log(user0[0].user_id);

    const res2 = await fetch(`http://localhost:3080/users/${user0[0].user_id}/products`)
    const products = await res2.json()

    return (
      <div>
        <AddProduct sub_categories={subs} isComplete={(!user0[0].address || !user0[0].phone_number || !user0[0].wilaya)}/>
        <ProductTable products={products}/>
      </div>
    )
  }
  