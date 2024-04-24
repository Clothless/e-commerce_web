import "./globals.css";
import {Poppins} from 'next/font/google';
import {Inter} from 'next/font/google';
import Header from "../components/Header";
import Category from "../components/Category";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

const poppins = Poppins({display:"swap", variable:"--font-poppins",subsets:["latin"], weight:["600","700","800","900"]})
const inter = Inter({display:"swap", variable:"--font-inter", subsets:["latin"]})


export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:3080/categories")
  let categories = await res.json();
  categories = categories.filter((category)=>category.category_id !== 404)

  const cookie = cookies().get('session')?.value;
  let session = null;
  let image = null;
  let role = null;
  if(cookie){
    session = await decrypt(cookie)
    const res = await fetch(`http://localhost:3080/users/${session.sessionId}`)
    const data = await res.json();
    image = data[0].image;
    role = data[0].role;
  }else{
    image = "";
    session = "";
  }

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body>
            <Header categories={categories} userId={session.sessionId} image={image} role={role}>
              {children}
            </Header>
        </body>
    </html>
  );
}
