"use client";
import Image from "next/image";
import ClientImage from "./ClientImage";

export default function Category({key, img, category, stock}) {
  return (
    <div key={key} className="cat" style={{width:"100%"}}>
        <div className="holder">
          <ClientImage src={img} classn={"immg"} style={{width:"100%", height:"100%",objectFit:"contain", objectPosition:"center center"}}/>
        </div>
        <div className="text">
            <h3>{category}</h3>
            <span>{stock} items available</span>
        </div>
    </div>
  )
}
