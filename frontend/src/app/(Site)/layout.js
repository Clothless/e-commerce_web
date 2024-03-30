import "./globals.css";
import {Poppins} from 'next/font/google';
import {Inter} from 'next/font/google';
import Header from "../components/Header";
import Category from "../components/Category";

const poppins = Poppins({display:"swap", variable:"--font-poppins",subsets:["latin"], weight:["600","700","800","900"]})
const inter = Inter({display:"swap", variable:"--font-inter", subsets:["latin"]})


export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:3080/categories")
  let categories = await res.json();
  categories = categories.data.filter((category)=>category.category_id !== 404)
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body>
            <Header categories={categories}>
              {children}
            </Header>
        </body>
    </html>
  );
}
