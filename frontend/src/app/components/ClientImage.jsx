"use client";

import Image from "next/image";

export default function ClientImage({classn, src, style, ...props}) {
  return (
    <Image className={classn} loader={()=>src} src={src} height={100} width={100} style={style} {...props}/>
  )
}
