import "./globals.css";
import {Poppins} from 'next/font/google';
import {Inter} from 'next/font/google';
import Header from "./components/Header";

const poppins = Poppins({subsets:["latin"], weight:["600","700","800","900"], variable:"--font-poppins"})
const inter = Inter({subsets:["latin"], variable:"--font-inter"})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body>
            <Header>
              {children}
            </Header>
        </body>
    </html>
  );
}
