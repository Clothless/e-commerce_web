import "./globals.css";
import {Poppins} from 'next/font/google';
import {Inter} from 'next/font/google';
import Header from "../components/Header";

const poppins = Poppins({display:"swap", variable:"--font-poppins",subsets:["latin"], weight:["600","700","800","900"]})
const inter = Inter({display:"swap", variable:"--font-inter", subsets:["latin"]})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body>
              {children}
        </body>
    </html>
  );
}