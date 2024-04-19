"use client";
import { useState } from "react";
import ClientImage from "./ClientImage";
import useDevice from '@/hooks/useDevice';
import ProoductSwiper from "./prooductSwiper";

export default function ImgHolder({main, images}) {
  const isDevice = useDevice("only screen and (max-width : 790px)");
    const [activeImg, setActiveImg] = useState(main);
  return (
    isDevice ?
        <ProoductSwiper images={images}/>
    :
      <div className="imgHolder">
        <ClientImage classn={"productImg"} src={activeImg}/>
        <div className="imgs" style={{display:images.length===1&&`none`}}>
            {images.map(image=>(
                <ClientImage classn={"oproductImg"} src={image} onClick={(e)=>setActiveImg(e.target.src)}/>
            ))}
        </div>
      </div>
  )
}
