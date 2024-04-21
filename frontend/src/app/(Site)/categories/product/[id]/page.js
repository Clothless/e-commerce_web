import "./product.css"
import Image from "next/image"
import ImgHolder from "@/app/components/ImgHolder";
import HandleProduct from "@/app/components/HandleProduct";

export default async function page({params}) {
    const {id} = params;
    const res = await fetch(`http://localhost:3080/products/${id}`)
    let productdata = await res.json();
    let product = productdata.product;
    product = product[0]
    const res2 = await fetch(`http://localhost:3080/users/${product.posted_by}`);
    let user = await res2.json();
    user = user[0];


    return (
        <>
            <header>
                <div className="container">
                    <Image src={"/logo.svg"} height={100} width={100} alt="logo"/>
                </div>
            </header>
            <div className="prod">
                <div className="container">
                    <div className="content">
                        <ImgHolder main={JSON.parse(product.images)[0]} images={JSON.parse(product.images)}/>
                        <div className="text">
                            <div className="first">
                                <h1>{product.name}</h1>
                                <p className="description">{product.description}</p>
                                <div className="price">
                                    <h3>Price: </h3>
                                    <p>{product.price}DA</p>
                                </div>
                                <div className="ship">
                                    <h3>Shipping: </h3>
                                    <span className="shipping">{product.shipping===1&&"Available"}</span>
                                </div>
                            </div>
                            <div className="second">
                                <div className="fname">
                                    <h3>Full name: </h3>
                                    <span style={{marginLeft:"10px"}}>{user.first_name}</span>
                                    <span>{user.last_name}</span>
                                </div>
                                <div className="email">
                                    <h3>Email: </h3>
                                    <span>{user.email}</span>
                                </div>
                                <div className="phone">
                                    <h3>Phone number: </h3>
                                    <span>{user.phone_number}</span>
                                </div>
                            </div>
                            <HandleProduct productId={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}