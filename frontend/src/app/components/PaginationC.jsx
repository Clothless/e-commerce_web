"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function PaginationC({total}) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className={`flex overflow-x-auto sm:justify-center ${total<=1&&"hidden"}`}>
      <Pagination currentPage={currentPage} totalPages={total} onPageChange={onPageChange} showIcons />
    </div>
  );
}