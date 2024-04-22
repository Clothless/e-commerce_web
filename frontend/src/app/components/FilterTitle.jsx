"use client";

import { useState } from "react";
import useDevice from '@/hooks/useDevice';

export default function FilterTitle() {
    const isDevice = useDevice("only screen and (max-width : 899px)");
    const [isShow, setIsShow] = useState(isDevice&&true);
  return (
    <div className={`title ${isShow&&"show"}`} onClick={()=>setIsShow(!isShow)}>Filter <img src="/filter.png" alt="" /></div>
  )
}
