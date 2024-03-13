import Image from "next/image";
import "./login.css"
import { login } from "../actions";

export default function loginPage(){
    return (
        <>
            <header>
                <div className="container">
                    <Image src={"/logo.svg"} height={100} width={100} alt="logo"/>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="text">
                        <h1>Login</h1>
                        <p>Enter your credentials below to login to your account</p>
                    </div>
                    <form action={login}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="m@example.com"/>
                        </div>
                        <div>
                            <div className="pass">
                                <label htmlFor="pwd">Password</label>   
                                <a href="">Forgot your password?</a>
                            </div>
                            <input type="password" name="password" id="pwd" />
                        </div>
                        <input type="submit" value="Login" />
                        <p className="final">Don't have an account? <a href="/signup">Sign up</a></p>
                    </form>
                </div>
            </main>
        </>
    )
}