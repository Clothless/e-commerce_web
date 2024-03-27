import Image from "next/image";

export default function Category({key, img, category, stock}) {
  return (
    <div key={key} className="cat" style={{width:"100%"}}>
        <div className="holder">
          <Image src={img} width={100} height={100} style={{width:"100%", height:"100%",objectFit:"contain", objectPosition:"center center"}}/>
        </div>
        <div className="text">
            <h3>{category}</h3>
            <span>{stock} items available</span>
        </div>
    </div>
  )
}
