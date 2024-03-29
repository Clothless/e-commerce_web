import Image from "next/image";

export default function Product({id, img, name, price, description}) {

  // async function makeFavorite(id){
  //   "use server";
  //   fetch("http://localhost:3080/")
  // }

  return (
    <div className="product">
        <div className="img">
            <Image className="product_img" loader={()=>img} src={img} height={100} width={100} style={{width:"100%", height:"100%", objectFit:"contain"}}/>
            <Image className="heart" src={"/heart.png"} width={100} height={100} style={{width:"auto", height:"auto"}}/>
            <div className="front">
                <h3 title={name}>{name}</h3>
                <h3>{price}DA</h3>
            </div>
        </div>
        <p>{description}</p>
        <button>More Details</button>
    </div>
  )
}
