import FilterSide from "@/app/components/FilterSide"
import "./search.css"
import Product from "@/app/components/Product";
import PaginationC from "@/app/components/PaginationC";
import FilterTitle from "@/app/components/FilterTitle";
import { searchProduct } from "@/app/actions/searchProduct";
export default async function searchPage({searchParams}) {
  const {name,...queries} = searchParams;
  console.log(queries);
  const res = await fetch("http://localhost:3080/categories")
  let categories = await res.json()
  categories = categories.filter((category)=>category.category_id !== 404).map((category)=>category.name);

  const categoryWithSubcategories = {};

  // Fetch the subcategories for each category and store them in the object
  for (const category of categories) {
    const subCategoryRes = await fetch(`http://localhost:3080/sub_categories/${category}`);
    const subCategories = await subCategoryRes.json();
    categoryWithSubcategories[category] = subCategories.map((subCategory) => subCategory.name);
  }

  const res2 = await fetch(`http://localhost:3080/products/search/approved?page=1&listPerPage=6${queries?`&name=${name}&${Object.entries(queries) .map(([key, value]) => `${key}=${value}`) .join('&')}`:""}`);
  console.log(`http://localhost:3080/products/search/approved?page=1&listPerPage=6${name&&queries?`&name=${name}&${Object.entries(queries) .map(([key, value]) => `${key}=${value}`) .join('&')}`:name&&(!queries)?`&name=${name}`:""}`);
  console.log(name);
  const products = await res2.json();

  return (
    <div className="searchP">
        <div className="container">
          <form action={searchProduct}>
            <span>
                <input className="searchInp" type="text" placeholder="Search with the name of the product" name="search"/>
                <img src="/search.png" alt="" style={{display:"inline", height:"30px"}}/>
            </span>
          </form>
        </div>
        <FilterTitle/>
        <div className="layout">
            <FilterSide categories={categories} subCategories={categoryWithSubcategories}/>
            <div className="prd">
              {
                products.data.length !== 0 ?
                (
                <div className="products">
                    {products.data.map(product=>{
                        return <Product productLink={"thing"} id={product.product_id} name={product.name} img={JSON.parse(product.images)[0]} price={product.price} description={product.description}/>
                    })}
                </div>
                    
                ):
                (
                <h1 className="not-found">no item available</h1>
                )
              }
              {/* <div className="container">

              </div> */}
                <PaginationC total={Math.round(products.data.length/6)}/>
            </div>
        </div>
    </div>
  )
}
