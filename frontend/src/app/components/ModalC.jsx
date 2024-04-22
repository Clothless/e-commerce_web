"use client";

import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
    >
      {children}
      <button onClick={closeModal} style={{float: "right",translate:"0 -43px", fontSize:"16px", fontWeight:"bold",padding:"10px",borderRadius:"7px",border:"2px solid #202020", color:"#202020",width:"100px"}}>
        Close
      </button>
    </dialog>
  );
}

import { useState } from "react";
import EditUser from "./EditUser";

export default function ModalC({type, component,theeId}) {
  // const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(false);

  function handleClose(value){
    setModal(value);
  }

  return (
    <>
      <button onClick={() => setModal(true)}>{type}</button>
  <Modal
    openModal={modal}
    closeModal={() => setModal(false)}
  >
    {component==="editusers" && (
      <EditUser theeeId={theeId} handleClose={handleClose}/>
    )}
  </Modal>

      {/* <Button onClick={() => setOpenModal(true)} className="text-[#374151] modalBtn">{type}</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{type}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
      
    </>
  );
}