import SpecialTitle from "@/app/components/SpecialTitle";
import ProductSwiper from "@/app/components/ProductSwiper";

export default async function ShowProducts({type}) {
    const res = await fetch(`http://localhost:3080/products/category/${type}`)
    const products = await res.json();
  return (
    <div className="showProducts">
        <div className="container">
            <SpecialTitle title={type.charAt(0).toUpperCase()+type.slice(1)}/>
            <ProductSwiper products={products.data}/>
        </div>
    </div>
  )
}
