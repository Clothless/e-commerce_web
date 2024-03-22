import Category from "@/app/components/Category";
import SpecialTitle from "@/app/components/SpecialTitle";


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
                        return <Category img={"/electronics.webp"} category={category.name} stock={100}/>
                    case "Clothing":
                        return <Category img={"/clothing.webp"} category={category.name} stock={100}/>
                    case "Books":
                        return <Category img={"/books.webp"} category={category.name} stock={100}/>
                    case "Home and Furniture":
                        return <Category img={"/furniture.webp"} category={category.name} stock={100}/>
                    case "Vehicles":
                        return <Category img={"/vehicles.webp"} category={category.name} stock={100}/>
                }
            })
        }
        </div>
        </div>
    </div>
  )
}
