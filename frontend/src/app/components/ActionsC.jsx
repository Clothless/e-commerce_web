"use client";
import React, { useEffect, useRef, useState } from 'react';
import EditUser from './EditUser';
import EditProducts from './EditProducts';
import EditCategory from './EditCategory';

const DropdownMenu = ({ EditModal, DeleteModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    EditModal.onOpen();
    setIsOpen(false);
  };

  const handleDelete = () => {
    DeleteModal.onOpen();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              type="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, children, width = 'max-w-md',header }) => {
  const modalContentRef = useRef(null);
  const [modalHeight, setModalHeight] = useState('h-full');

  useEffect(() => {
    if (modalContentRef.current) {
      const contentHeight = modalContentRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      if (contentHeight <= windowHeight * 0.9) {
        setModalHeight('h-auto');
      } else {
        setModalHeight('h-full');
      }
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center mx-10">
        <div
          className={`bg-white rounded-lg shadow-lg w-full ${modalHeight} sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{header}</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div ref={modalContentRef} className="momen flex-grow p-4 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const ActionsC = ({tab,theId,header}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };


  return (
    <div>
      <DropdownMenu
        EditModal={{
          onOpen: handleEditModalOpen,
          onClose: handleEditModalClose,
        }}
        DeleteModal={{
          onOpen: handleDeleteModalOpen,
          onClose: handleDeleteModalClose,
        }}
      />

      <Modal isOpen={editModalOpen} onClose={handleEditModalClose} header={header}>
        {
          tab === "users"
          ?
          (<EditUser theeeId={theId}/>)
          :
          tab === "products"
          ?
          (<EditProducts theeeId={theId}/>)
          :
          tab === "categories"
          ?
          (<EditCategory theeeId={theId}/>)
          :
          <h1>hello</h1>
        }
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleEditModalClose}
        >
          Close
        </button> */}
      </Modal>

      <Modal isOpen={deleteModalOpen} onClose={handleDeleteModalClose}>
        <h2 className="text-xl font-bold mb-4">Delete</h2>
        <p>Delete modal content</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleDeleteModalClose}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};
export default ActionsC;

