import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="about" id="about-us">
        <div className="container">
            {/* <SpecialTitle title={"Categories"}/> */}
            <div className="content">
                <div className="text">
                    <h1>About Us</h1>
                    <p>Step into <span>E-sog</span>, where magic happens with every click. Dive into a world of treasures and connections, where buyers and sellers come together like old friends. Experience the joy of finding what you love and selling what you cherish, all in one vibrant marketplace.</p>
                </div>
                <div className="img">
                    <Image className="image" src={"/team2.webp"} unoptimized width={100} height={100} style={{position:"relative", width:"100%", height:"100%", objectFit:"contain"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
