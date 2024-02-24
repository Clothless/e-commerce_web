"use client";
import Image from "next/image";
import "./signup.css"
import { useState } from "react";

import { signup } from "../actions";

export default function signupPage(){
    const [disabled, setDisabled] = useState(true);

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
                        <h1>Create an account</h1>
                        <p>Enter your information to create an account</p>
                    </div>
                    <form action={signup} method="POST">
                        <div className="fullName">
                            <div>
                                <label htmlFor="fname">First name</label>
                                <input type="text" name="first_name" placeholder="john" id="fname"/>
                            </div>
                            <div>
                                <label htmlFor="lname">Last name</label>
                                <input type="text" name="last_name" placeholder="doe" id="lname"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="m@example.com"/>
                        </div>
                        <div>
                            <label htmlFor="pwd">Password</label>
                            <input type="password" name="password" id="pwd" />
                        </div>
                        <div>
                            <label htmlFor="cpwd">Confirm Password</label>
                            <input type="password" id="cpwd" />
                        </div>
                        <div>
                            <input type="checkbox" id="" onChange={()=>setDisabled(!disabled)}/>
                            <label htmlFor="">I agree to the <a href="">Terms and Conditions</a></label>
                        </div>
                        <input type="submit" value="Sign up" disabled={disabled}/>
                    </form>
                </div>
            </main>
        </>
    )
}