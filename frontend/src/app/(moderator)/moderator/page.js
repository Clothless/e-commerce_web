"use client";
import { Submissions } from "@/components/component/submissions";
import "./style.css"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function page() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3080/products/pending")
        .then(res=>res.json())
        .then(d=> setData(d.data))
    },[])
  return (
    <>
        <header>
            <div className="container">
                <Image src={"/logo.svg"} height={100} width={100} alt="logo"/>
            </div>
        </header>
        <br />
        <br />
        <Submissions data={data}/>
        <br /><br />
    </>
  )
}
