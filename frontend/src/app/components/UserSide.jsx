"use client"

import { usePathname } from "next/navigation"
import ClientImage from "@/app/components/ClientImage";
import Link from 'next/link'

export default function UserSide({userid, img, username}) {
    const pathname = usePathname()
  return (
    <nav className="side">
        <div className="top">
            <ClientImage classn={'userImg'} src={img} style={{height:"48px", width:"48px",borderRadius:'50%'}}/>
            <div className="text">
                <p>Hello</p>
                <h4>{username} !</h4>
            </div>
        </div>
        <Link className={`linkk ${pathname.startsWith('/user/profile/')&&'active'}`} href={`/user/profile/${userid}`}>
            <ClientImage classn={'imgg'} src={'/Account.svg'} style={{height:"30px",width:"30px"}} />
            {/* <img src="/sAccount.png" alt="" /> */}
            My Account
        </Link>
        <Link className={`linkk ${pathname.startsWith('/user/products/')&&'active'}`} href={`/user/products/${userid}`}>
            <ClientImage classn={'imgg'} src={'/productsss.svg'} style={{height:'30px',width:"30px"}}/>
            My Products
        </Link>
    </nav>
  )
}
