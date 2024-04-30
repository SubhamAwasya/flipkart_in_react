import React from "react";

function Grid({ children }) {
  return (
    <div className="grid py-3 px-20 max-sm:px-4 video-page-container gap-4 md:gap-6 ">
      {children}
    </div>
  );
}

export default Grid;
