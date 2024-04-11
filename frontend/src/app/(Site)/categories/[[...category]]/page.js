import Breadcrumb from "@/app/components/BreadcrumbC";
import Filter from "@/app/components/Filter";
import PaginationC from "@/app/components/PaginationC";
import "./category.css"
import Product from "@/app/components/Product";

  export default async function Page({ params }) {
    const {category} = params;
    console.log(category);
    const res = await fetch(`http://localhost:3080/products/category/${category[0]}`);
    const products = await res.json();
    console.log(products);
    return (
        <div className="category_p">
            <div className="container">
                <Breadcrumb lines={category}/>
                <h1>sub-categories</h1>
                <main>
                    <Filter/>
                    <div className="products">
                        {products.data.map(product=>{
                            return <Product id={product.product_id} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/>
                        })}
                    </div>
                    <PaginationC/>
                </main>
            </div>
        </div>
    )
  }