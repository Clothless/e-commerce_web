"use client";

import { acceptProduct } from "../actions/acceptProduct";
import { rejectProduct } from "../actions/rejectProduct";


export default function HandleProduct({productId}) {
  return (
    <div className="third">
        <button className="accept" onClick={async()=>{
            await acceptProduct(productId);
        }}>accept</button>
        <button className="reject" onClick={async()=>{
            await rejectProduct(productId)
        }}>reject</button>
    </div>
  )
}
