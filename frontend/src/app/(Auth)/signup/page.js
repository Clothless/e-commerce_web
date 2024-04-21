"use client";
import Image from "next/image";
import "./signup.css"
import { useState } from "react";
import Link from 'next/link'

import { signup } from "../signUpAction";
import TermModal from "@/app/components/TermModal";

export default function signupPage(){
    const [disabled, setDisabled] = useState(true);

    function handleDisable(value){
        setDisabled(value);
    }

    return (
        <>
            <header>
                <div className="container">
                    <Link href="/"><Image src={"/logo.svg"} height={100} width={100} alt="logo"/></Link>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="text">
                        <h1>Create an account</h1>
                        <p>Enter your information to create an account</p>
                    </div>
                    <form action={signup}>
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
                            <input type="checkbox" id="" onChange={()=>setDisabled(!disabled)} checked={!disabled}/>
                            <label htmlFor="">I agree to the <TermModal handleDisable={handleDisable}/></label>
                        </div>
                        <input type="submit" value="Sign up" disabled={disabled}/>
                        <p className="final">Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
            </main>
        </>
    )
}