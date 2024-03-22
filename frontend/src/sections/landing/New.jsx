import SpecialTitle from "@/app/components/SpecialTitle";
import Swiper from "@/app/components/Swiper";

export default async function New() {
    const res = await fetch("localhost:3080/products/category/")
  return (
    <div className="new">
        <div className="container">
            <SpecialTitle title={"New Products"}/>
            <Swiper/>
        </div>
    </div>
  )
}
