"use client";
import { useState } from "react";
import ClientImage from "./ClientImage";

export default function ImgHolder({main, images}) {
    const [activeImg, setActiveImg] = useState(main);
  return (
    <div className="imgHolder">
        <ClientImage classn={"productImg"} src={activeImg}/>
        <div className="imgs">
            {images.map(image=>(
                <ClientImage classn={"oproductImg"} src={image} onClick={(e)=>setActiveImg(e.target.src)}/>
            ))}
        </div>
    </div>
  )
}
