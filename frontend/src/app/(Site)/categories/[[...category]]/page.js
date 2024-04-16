import Breadcrumb from "@/app/components/BreadcrumbC";
import Filter from "@/app/components/Filter";
import PaginationC from "@/app/components/PaginationC";
import "./category.css"
import Product from "@/app/components/Product";
import Categories from "@/sections/landing/Categories";

  export default async function Page({ params }) {
    const {category} = params;
    let link = category.length >1?`http://localhost:3080/products/sub_category/${category.at(-1)}` : `http://localhost:3080/products/category/${category[0]}`;
    const res = await fetch(link);
    const products = await res.json();
    let res2 = await fetch(`http://localhost:3080/categories/count/${category.at(-1)}`)
    let total = await res2.json();
    console.log(category[0]);
    return (
        <div className="category_p" style={products.data.length === 0 ? {minHeight:"55vh"}:{minHeight:"fit-content"}}>
            <div className="container">
                <Breadcrumb lines={category}/>
                {
                    category.length === 1 && (
                        <Categories link={`/sub_categories/${category[0]}`} title={"Sub-categories"} route={`/categories/${category[0]}`}/>
                    )
                }
                <main>
                    <Filter/>
                    {
                        products.data.length !== 0 ?
                        (
                        <div className="products">
                            {products.data.map(product=>{
                                return <Product id={product.product_id} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/>
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