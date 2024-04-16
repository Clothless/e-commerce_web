"use client";
import { usePathname } from "next/navigation";
import ClientImage from "./ClientImage";
import Link from "next/link";
export default function DashNav() {
    const pathname = usePathname();
  return (
    <nav>
    <ClientImage classn={"logo"} src={"/logo.svg"} style={{}}/>
    <div className={`line ${pathname === "/dashboard/products" ? "active" : ""}`}>
        <ClientImage classn={"package"} src={"/package.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/products">Products</Link>
    </div>
    <div className={`line ${pathname === "/dashboard/categories" ? "active" : ""}`}>
        <ClientImage classn={"grid1"} src={"/grid.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/categories" >Categories</Link>
    </div>
    <div className={`line ${pathname === "/dashboard/sub-categories" ? "active" : ""}`}>
        <ClientImage classn={"grid2"} src={"/grid.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/sub-categories" >Sub-categories</Link>
    </div>
    <div className={`line ${pathname === "/dashboard/users" ? "active" : ""}`}>
        <ClientImage classn={"users"} src={"/users.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/users" >Users</Link>
    </div>
    <div className={`line ${pathname === "/dashboard/moderators" ? "active" : ""}`}>
        <ClientImage classn={"users"} src={"/users.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/moderators" >Moderators</Link>
    </div>
    <div className={`line ${pathname === "/dashboard/admins" ? "active" : ""}`}>
        <ClientImage classn={"users"} src={"/users.svg"} style={{height:"20px", width:"20px"}}/>
        <Link className="link" rel="stylesheet" href="/dashboard/admins" >Admins</Link>
    </div>
</nav>
  )
}
