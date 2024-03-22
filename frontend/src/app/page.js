import Categories from "@/sections/landing/Categories";
import "./index.css"
import New from "@/sections/landing/New";

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
      <Categories/>
      <New/>
    </>
  );
}
