"use client";
import Image from "next/image";
import { Dropdown } from 'flowbite-react';
import Link from "next/link";
import { NestedDropdown } from "mui-nested-menu";

function CatDropdown({label, content}) {
  const menuItemsData = {
    label: <p className="label">{label}</p>,
    items: content
  }
  return (
      <NestedDropdown
        menuItemsData={menuItemsData}
        MenuProps={{className: 'dropDownMenu', elevaton: 4}}
        ButtonProps={{disableRipple: true, className: 'menuBtn', sx: {":hover":{backgroundColor: 'white'}, all: 'inheit'}}}
      />
  )
}

export default function Header({children}) {
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
          <CatDropdown label="Categories" content={catgories}/>
          <Link className="link" title="favorites" href="/categories/favorites">Favorites</Link>
          <Link className="link" title="what's new" href="/categories/new">What's new</Link>
          <Link className="link" title="contact" href="#contact">Contact</Link>
          <input type="text" placeholder="Search Product" name="searchField"/>
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <Image src={"/Account.svg"} width={10} height={10} style={{height:"30px", cursor:"pointer"}}/>}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        </div>
    </header>
    {children}
    </>
  )
}
