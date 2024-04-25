import Breadcrumb from "@/app/components/BreadcrumbC";
import Filter from "@/app/components/Filter";
import PaginationC from "@/app/components/PaginationC";
import "./category.css"
import Product from "@/app/components/Product";
import Categories from "@/sections/landing/Categories";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

  export default async function Page({ params }) {
    const {category} = params;
    const cookie = cookies().get('session')?.value;
    let session = null;
    if(cookie){
      session = await decrypt(cookie)
    }else{
      session = ""
    }
    let link = `http://localhost:3080/products/category/${category}`;

    link = category === 'favorites' ? `http://localhost:3080/users/${session.sessionId}/favorite/`:link;
    const res = await fetch(link);
    const products = await res.json();
    console.log(products);
    let res2 = await fetch(`http://localhost:3080/categories/count/${category}`)
    let total = await res2.json();

    // console.log(category[0]);
    // console.log(category);
    // console.log("rani hna");
    let subs = []
    if(category !== "favorites"){
        for(let product of products.data){
            let res3 = await fetch(`http://localhost:3080/sub_categories/sub_id/${product.sub_category}`)
            let sub = await res3.json()
            subs.push(sub[0].name.toLowerCase())
        }
    }
    return (
        <div className="category_p" style={products.data.length === 0 ? {minHeight:"55vh"}:{minHeight:"fit-content"}}>
            <div className="container">
                <Breadcrumb lines={[category]}/>
                <Categories link={`/sub_categories/${category}`} title={"Sub-categories"} route={`/categories/${category}`}/>
                <main>
                    <Filter/>
                    {
                        products.data.length !== 0 ?
                        (
                        <div className="products">
                            {products.data.map((product,id)=>{
                                return <Product key={product.product_id} productLink={`${category}/${subs[id]}/${product.product_id}`} id={product.product_id} userId={session.sessionId} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/>
                            })}
                        </div>
                            
                        ):
                        (
                        <h1 className="not-found">no item available</h1>
                        )
                    }
                    <PaginationC total={Math.round(total/6)}/>
                </main>
            </div>
        </div>
    )
  }