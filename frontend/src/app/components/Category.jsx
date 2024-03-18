import Image from "next/image";

export default function Category({img, category, stock}) {
  return (
    <div className="cat">
        <Image src={img} height={50} width={50}/>
        <div className="text">
            <h3>{category}</h3>
            <span>{stock}</span>
        </div>
    </div>
  )
}
