"use client"
import { usePathname } from "next/navigation";
import ClientImage from "./ClientImage";
export default function DashHeader() {
    let pathname = usePathname();
    pathname = pathname.split("/").at(-1);

  return (
    <header>
    <h3>{pathname[0].toUpperCase()+pathname.slice(1)}</h3>
    <div className="rightside">
        <div className="inp">
            <input type="text" placeholder={`Search ${pathname[0].toUpperCase()+pathname.slice(1)}`}/>
            <ClientImage classn={"dashSearch"} src={"/dashsearch.svg"} style={{position:"absolute", right:"10px", top:"50%", translate:"0 -50%", width:'20px', height:"20px"}}/>
        </div>
        {/* <button className="logout">logout</button> */}
    </div>
</header>
  )
}
