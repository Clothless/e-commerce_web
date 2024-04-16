import Categories from "@/sections/landing/Categories";
import "./index.css"
import ShowProducts from "@/sections/landing/ShowProducts";
import AboutUs from "@/sections/landing/AboutUs";
import Contact from "@/sections/landing/Contact";
import Footer from "@/app/components/Footer"

export default async function Home() {
  return (
    <>
      <div className="hero">
        <div className="text">
          <h1>E-Sog</h1>
          <p>A whole store, in front of your door !</p>
          <button>Learn more</button>
        </div>
      </div>
      <Categories link={"/categories/"} title={"Categories"} route={"/categories"}/>
      <ShowProducts type="electronics"/>
      <ShowProducts type="clothing"/>
      <AboutUs />
      <Contact/>
    </>
  );
}
