// "use client";
import { Submissions } from "@/components/component/submissions";
import "./style.css"
import Image from 'next/image'
import Link from "next/link";
// import { useEffect, useState } from "react";
import ClientImage from "@/app/components/ClientImage";

import { revalidateTag } from 'next/cache'

export default async function page({searchParams}) {
    const {name} = searchParams
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch("http://localhost:3080/products/pending")
    //     .then(res=>res.json())
    //     .then(d=> setData(d.data))
    // },[])
    const res = await fetch(`http://localhost:3080/products/search/pending?name=${name?name:""}`,{next:{tags:['pending']}})
    console.log(`http://localhost:3080/products/search/pending?name=${name}`);
    const data = await res.json()


    async function updatePending(value){
        "use server"
        revalidateTag(value)
    }

    // .then(d=> setData(d.data))
  return (
    <>
        <header>
            <div className="container">
                {/* <Image src={"/logo.svg"} height={100} width={100} alt="logo"/> */}
                
                <div className="headerContent">
                    <Link href={"/"}><ClientImage src={"/logo.svg"}/></Link>
                    {/* <button className="logout">Logout</button> */}
                </div>
            </div>
        </header>
        <br />
        <br />
        <Submissions data={data.data} updatePending={updatePending}/>
        <br /><br />
    </>
  )
}
