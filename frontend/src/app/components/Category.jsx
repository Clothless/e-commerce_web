import Image from "next/image";

export default function Category({key, img, category, stock}) {
  return (
    <div key={key} className="cat">
        <div className="holder">
          <Image src={img} layout="fill" objectFit="contain" objectPosition="center center"/>
        </div>
        <div className="text">
            <h3>{category}</h3>
            <span>{stock} items available</span>
        </div>
    </div>
  )
}
