"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { addUser } from "../actions/addUser";
import OneImageUploader from "./OneImageUploader";

export default function AddUserr({type}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="h-fit w-fit enabled:hover:bg-[#357fb1] bg-[#2892d7]">Add {type}</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Body>
            <form id="our-form" className="addP" action={addUser}>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">First Name:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" name="first_name"/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Last Name:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" name="last_name"/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Address:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" name="address"/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Email:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="text" name="email"/>
                </div>
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] text-[15px] mb-[10px] text-balance" htmlFor="">Password:</label>
                    <input className="rounded-[7px] text-[1.03rem] p-[10px]" type="password" name="password"/>
                </div>
                <input type="hidden" name="role" value={type} />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button form="our-form" type="submit" className="w-[80px]" style={{backgroundColor:"#ff9200"}}>Add</Button>
          <Button color="gray" className="enabled:hover:text-[black] w-[80px]" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
