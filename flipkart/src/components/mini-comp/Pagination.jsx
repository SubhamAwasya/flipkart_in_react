import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="join w-full justify-center my-5 z-10">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="join-item btn btn-neutral w-20"
      >
        Back
      </button>
      <div className="join-item btn w-16" name="options">
        {currentPage}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="join-item btn btn-neutral w-20"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
