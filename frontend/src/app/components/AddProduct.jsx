"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { addProduct } from "../actions/addProduct";

export default function AddProduct({sub_categories,isComplete}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="h-fit w-fit enabled:hover:bg-[#357fb1] bg-[#2892d7] disabled:bg-gray-500" disabled={isComplete}>Add product</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Body>
            <form id="our-form" className="addP" action={addProduct}>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Name:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" name="name"/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Category:</label>
                    <select name="sub_category" className="rounded-[7px]">
                        <option value="empty" className="text-[14px]">--select a category--</option>
                        {
                            sub_categories.map((sub,index)=>{
                                return <option key={sub.sub_id} value={sub.sub_id}>{sub.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Images:</label>
                    <ImageUploader/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Description:</label>
                    <textarea name="description" className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" style={{resize:"none",height:"100px"}}></textarea>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Price:</label>
                    <input name="price" className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" />
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">shipping:</label>
                    <select name="shipping" id="" className="rounded-[7px]">
                        <option value="empty">--choose--</option>
                        <option value="1">available</option>
                        <option value="0">not available</option>
                    </select>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button form="our-form" type="submit" className="w-[80px]" style={{backgroundColor:"#ff9200"}}>Edit</Button>
          <Button color="gray" className="enabled:hover:text-[black] w-[80px]" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
