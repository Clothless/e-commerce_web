import Image from "next/image";
import Link from "next/link";

export default function Footer({categories}) {
  return (
    <div className="footer">
        <div className="container">
            <div className="content">
                <div className="text">
                    <Image src="/logo.svg" width={100} height={100}/>
                    <p>A whole store, in front of your door !</p>
                </div>
                <div className="categoriess">
                    <h3>Categories</h3>
                    {
                        categories.map((category=>{
                            return <span key={category.category_id}><Link href={`/categories/${category.name.toLowerCase()}`}>{category.name}</Link></span>
                        }))
                    }
                    {/* <span>Electronics</span>
                    <span>Clothing</span>
                    <span>Home and furniture</span>
                    <span>shoes</span> */}
                </div>
                <div className="contacts">
                    <h3>Contact us</h3>
                    <span>Email: contact@example.com</span>
                    <span>Phone: 0574312289</span>
                </div>
                <div className="social">
                    <h3>Follow us</h3>
                    <span><a href="#facebook"><Image src={"/facebook.png"} width={30} height={30}/></a></span>
                    <span><a href="#instagram"><Image src={"/instagram.png"} width={30} height={30}/></a></span>
                    <span><a href="#youtube"><Image src={"/youtube.png"} width={30} height={30}/></a></span>
                    <span><a href="#twitter"><Image src={"/twitter.png"} width={30} height={30}/></a></span>
                </div>
            </div>
        </div>
    </div>
  )
}
