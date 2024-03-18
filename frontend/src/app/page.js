import Category from "./components/Category";
import SpecialTitle from "./components/SpecialTitle";
import "./index.css"

export default async function Home() {
  const res = await fetch("http://localhost:3080/categories");
  const categories = await res.json();
  console.log(categories);
  return (
    <>
      <div className="hero">
        <div className="text">
          <h1>E-Sog</h1>
          <p>A whole store, in front of your door !</p>
          <button>Learn more</button>
        </div>
      </div>
      <div className="categories">
        <div className="container">
          <SpecialTitle title={"Categories"}/>
          <Category img={"jsdfklsd.svg"} category={"bachir"} stock={100}/>
        </div>
      </div>
    </>
  );
}
