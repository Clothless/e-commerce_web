import SpecialTitle from "@/app/components/SpecialTitle";
import ProductSwiper from "@/app/components/ProductSwiper";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

export default async function ShowProducts({type}) {
    const res = await fetch(`http://localhost:3080/products/category/${type}`)
    const products = await res.json();
    const cookie = cookies().get('session')?.value;
    let session = null;
    if(cookie){
      session = await decrypt(cookie)
    }else{
      session = ""
    }
  return (
    <div className="showProducts">
        <div className="container">
            <SpecialTitle title={type.charAt(0).toUpperCase()+type.slice(1)}/>
            <ProductSwiper products={products.data} userId={session.sessionId}/>
        </div>
    </div>
  )
}
