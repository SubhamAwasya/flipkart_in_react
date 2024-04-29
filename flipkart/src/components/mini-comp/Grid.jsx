import React from "react";

function Grid({ children }) {
  return (
    <div className="grid py-6 px-20 max-sm:px-0 video-page-container gap-4">
      {children}
    </div>
  );
}

export default Grid;
