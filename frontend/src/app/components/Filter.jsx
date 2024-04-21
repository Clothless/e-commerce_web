"use client";
import { useState } from "react";
import SpecialTitle from "./SpecialTitle";

export default function Filter() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`filter ${toggle===false?"hide":"show"}`}>
      <div className="title">
        <h1 onClick={()=>setToggle(!toggle)} title="click to show it">Filter</h1>
        <hr style={{backgroundColor:"#8080800f"}}/>
      </div>
      <form action="">
        <div>
          <label htmlFor="">Price: </label>
          <input type="text" placeholder="MIN" name="min"/>
          <input type="text" placeholder="MAX" name="max"/>
        </div>
        <div>
          <label htmlFor="">Delivery: </label>
          <input type="checkbox" name="delivery"/>
        </div>
        <div>
          <label htmlFor="">Posted from: </label>
          <input type="date" />
        </div>
        <input type="submit" value={"Filter"} />
      </form>
    </div>
  )
}
