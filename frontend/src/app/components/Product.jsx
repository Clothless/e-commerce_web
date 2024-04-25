"use client"
import Image from "next/image";
import ClientImage from "./ClientImage";
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { addFavorite } from "../actions/addFavorite";

export default function Product({userId, key, id, img, name, price, description,productLink}) {

  // async function makeFavorite(id){
  //   "use server";
  //   fetch("http://localhost:3080/")
  // }

  return (
    <div className="product" key={key}>
        <div className="img">
            {/* <Image className="product_img" loader={()=>img} src={img} height={100} width={100} style={{width:"100%", height:"100%", objectFit:"contain"}}/> */}
            <ClientImage classn={"product_img"} src={img} style={{width:"100%", height:"100%", objectFit:"contain",borderRadius:'10px'}}/>
            <ClientImage onClick={async()=>{
              await addFavorite(id, userId);
            }} classn={"heart"} src={"/heart.png"} style={{width:"auto", height:"auto"}}/>
            <div className="front">
                <h3 title={name}>{name}</h3>
                <h3>{price}DA</h3>
            </div>
        </div>
        <p>{description}</p>
        <Link href={productLink} className="button">More Details</Link>
    </div>
  )
}
