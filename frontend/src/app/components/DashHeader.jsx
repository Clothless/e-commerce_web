"use client"
import { usePathname } from "next/navigation";
import ClientImage from "./ClientImage";
import AddProduct from "./AddProduct";
import AddUserr from "./AddUserr";
export default function DashHeader({subs}) {
    let pathname = usePathname();
    pathname = pathname.split("/").at(-1);

  return (
    <header>
    <h3>{pathname[0].toUpperCase()+pathname.slice(1)}</h3>
    <div className="rightside">
        {/* <button className="logout">logout</button> */}
        {
          pathname === "products"?
          <AddProduct sub_categories={subs} isComplete={false}/>
          :
          pathname === "users"?
          <AddUserr type={"user"}/>
          :
          pathname === "moderators"?
          <AddUserr type={"moderator"}/>
          :
          pathname === "admins"?
          <AddUserr type={"admins"}/>
          :
          <h1></h1>
        }
    </div>
</header>
  )
}
