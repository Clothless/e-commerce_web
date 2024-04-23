"use client";
import Image from "next/image";
import { Dropdown } from 'flowbite-react';
import Link from "next/link";
import { NestedDropdown } from "mui-nested-menu";
import { useState } from "react";
import Footer from "./Footer";
import ClientImage from "./ClientImage";
import { logout } from "../actions/logout";

function CatDropdown({label, content}) {
  const menuItemsData = {
    label: <p className="label">{label}</p>,
    items: content
  }
  return (
      <NestedDropdown
      className="categoriess"
        menuItemsData={menuItemsData}
        MenuProps={{className: 'dropDownMenu', elevaton: 4}}
        ButtonProps={{disableRipple: true, className: 'menuBtn', sx: {":hover":{backgroundColor: 'white'}, all: 'inheit'}}}
      />
  )
}

export default function Header({children, categories,userId,image,role}) {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesList = [...categories.map(category => {
    return {label:<Link href={`/categories/${category.name.toLowerCase()}`}>{category.name}</Link>}
  })]

  return (
    <>
    <header className="mainHeader">
        <div className="container">
          <div className="content">
            <Link href={"/"}><Image src="/logo.svg" width={100} height={100} priority/></Link>
            <nav>
              <CatDropdown label="Categories" content={categoriesList}/>
              <Link className="link" title="favorites" href="/categories/favorites">Favorites</Link>
              <Link className="link" title="about" href="#about-us">About us</Link>
              <Link className="link" title="contact" href="#contact">Contact</Link>
              <span>
                <input type="text" placeholder="Search Product" name="searchField"/>
                <img src={"/search.png"} alt="" style={{display:"inline", height:"30px"}}/>
              </span>
              <Dropdown label="" dismissOnClick={false} renderTrigger={() => <Image className="userImg" loader={()=>image?image:`/Account.svg`} src={image?image:`/Account.svg`} height={10} width={10} style={{height:"30px", cursor:"pointer",borderRadius:"50%",position:"relative"}}/>}>
              {/* <Image className={classn} loader={()=>src} src={src} height={100} width={100} style={style} {...props}/> */}
                <Dropdown.Item><Link href={`/user/profile/${userId?userId:""}`}>Profile</Link></Dropdown.Item>
                {
                  role === "moderator"
                  &&(
                    <Dropdown.Item><Link href={"/moderator"}>Panel</Link></Dropdown.Item>
                  )
                }
                {
                  role === "admin"
                  &&(
                    <Dropdown.Item><Link href={"/dashboard/products"}>Dashboard</Link></Dropdown.Item>
                  )
                }
                <Dropdown.Item onClick={async()=>{
                  await logout();
                }}>Sign out</Dropdown.Item>
              </Dropdown>
              <div className="login">
                <button>Sign in</button>
                <button>Sign up</button>
              </div>
              <div className="loggedIn hide">
                <button>Profile</button>
                <button>Sign out</button>
              </div>
            </nav>
            <div className={isOpen?"open":undefined} id="burger" onClick={()=>setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
    </header>
    {children}
    <Footer categories={categories}/>
    </>
  )
}
