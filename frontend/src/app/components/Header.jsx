"use client";
import Image from "next/image";
import { Dropdown } from 'flowbite-react';
import Link from "next/link";
import { NestedDropdown } from "mui-nested-menu";
import { useState } from "react";

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

export default function Header({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const catgories = [
    {
      label:"one"
    },
    { 
      label:"two"
    },
    {
      label:"three"
    }
  ]
  return (
    <>
    <header className="mainHeader">
        <div className="container">
          <div className="content">
            <Image src="/logo.svg" width={100} height={100}/>
            <nav>
              <CatDropdown label="Categories" content={catgories}/>
              <Link className="link" title="favorites" href="/categories/favorites">Favorites</Link>
              <Link className="link" title="what's new" href="/categories/new">What's new</Link>
              <Link className="link" title="contact" href="#contact">Contact</Link>
              <span>
                <input type="text" placeholder="Search Product" name="searchField"/>
                <img src="/search.png" alt="" style={{display:"inline", height:"30px"}}/>
              </span>
              <Dropdown label="" dismissOnClick={false} renderTrigger={() => <Image className="userImg" src={"/Account.svg"} width={10} height={10} style={{height:"30px", cursor:"pointer"}}/>}>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
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
            <div className={isOpen&&"open"} id="burger" onClick={()=>setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
    </header>
    {children}
    </>
  )
}
