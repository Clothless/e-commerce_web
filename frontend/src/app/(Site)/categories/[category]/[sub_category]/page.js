import Breadcrumb from "@/app/components/BreadcrumbC";
import Filter from "@/app/components/Filter";
import PaginationC from "@/app/components/PaginationC";
import "../category.css"
import Product from "@/app/components/Product";
import Categories from "@/sections/landing/Categories";

  export default async function Page({ params }) {
    const {category,sub_category} = params;
    let link = `http://localhost:3080/products/sub_category/${sub_category}`;
    const res = await fetch(link);
    const products = await res.json();
    let res2 = await fetch(`http://localhost:3080/sub_categories/count/${sub_category}`)
    let total = await res2.json();
    // let total = 10;
    // console.log(category[0]);
    console.log(products);
    return (
        <div className="category_p" style={products.data.length === 0 ? {minHeight:"55vh"}:{minHeight:"fit-content"}}>
            <div className="container">
                <Breadcrumb lines={[category, sub_category]}/>
                {/* <Categories link={`/sub_categories/${category}`} title={"Sub-categories"} route={`/categories/${category}`}/> */}
                <main>
                    <Filter/>
                    {
                        products.data.length !== 0 ?
                        (
                        <div className="products">
                            {products.data.map(product=>{
                                return <Product productLink={`${sub_category}/${product.product_id}`} id={product.product_id} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/>
                            })}
                        </div>
                            
                        ):
                        (
                        <h1 className="not-found">no item available</h1>
                        )
                    }
                    <PaginationC total={Math.round((total.data)/6)}/>
                </main>
            </div>
        </div>
    )
  }