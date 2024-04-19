import Category from "@/app/components/Category";
import SpecialTitle from "@/app/components/SpecialTitle";
import Link from "next/link";


export default async function Categories({link,title,route}) {
    const res = await fetch(`http://localhost:3080${link}`);
    let categories = await res.json();
    categories = categories.filter((category)=>category.category_id !== 404)
    console.log(categories);
  return (
    <div className="categories">
        <div className="container">
        <SpecialTitle title={title}/>
        <div className="cont">
        {
            categories.map((category,id)=>{
                // switch(category.name){
                //     case "Electronics":
                //         return <Link className="link" href={`categories/electronics`}><Category img={"/electronics.webp"} category={category.name} stock={100}/></Link>
                //     case "Clothing":
                //         return <Link className="link" href={`categories/clothing`}><Category img={"/clothing.webp"} category={category.name} stock={100}/></Link>
                //     case "Books":
                //         return <Link className="link" href={`categories/books`}><Category img={"/books.webp"} category={category.name} stock={100}/></Link>
                //     case "Home and Furniture":
                //         return <Link className="link" href={`categories/furniture`}><Category img={"/furniture.webp"} category={category.name} stock={100}/></Link>
                //     case "Vehicles":
                //         return <Link className="link" href={`categories/vehicles`}><Category img={"/vehicles.webp"} category={category.name} stock={100}/></Link>
                // }
                return <Link key={category.category_id} className={`link`} href={`${route}/${category.name.toLowerCase().split(" ").join("-")}`}><Category img={category.image} category={category.name} stock={100}/></Link>
            })
        }
        </div>
        </div>
    </div>
  )
}
