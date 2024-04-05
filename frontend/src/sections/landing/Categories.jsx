import Category from "@/app/components/Category";
import SpecialTitle from "@/app/components/SpecialTitle";
import Link from "next/link";


export default async function Categories() {
    const res = await fetch("http://localhost:3080/categories");
    const categories = await res.json();
  return (
    <div className="categories">
        <div className="container">
        <SpecialTitle title={"Categories"}/>
        <div className="cont">
        {
            categories.data.map((category,id)=>{
                switch(category.name){
                    case "Electronics":
                        return <Link className="link" href={`categories/electronics`}><Category img={"/electronics.webp"} category={category.name} stock={100}/></Link>
                    case "Clothing":
                        return <Link className="link" href={`categories/clothing`}><Category img={"/clothing.webp"} category={category.name} stock={100}/></Link>
                    case "Books":
                        return <Link className="link" href={`categories/books`}><Category img={"/books.webp"} category={category.name} stock={100}/></Link>
                    case "Home and Furniture":
                        return <Link className="link" href={`categories/furniture`}><Category img={"/furniture.webp"} category={category.name} stock={100}/></Link>
                    case "Vehicles":
                        return <Link className="link" href={`categories/vehicles`}><Category img={"/vehicles.webp"} category={category.name} stock={100}/></Link>
                }
            })
        }
        </div>
        </div>
    </div>
  )
}
