import React from "react";

import { Link } from "react-router-dom";
const header = () => {
  return (
    <header className="sjadow stickt z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto mx-w-screen-xl">
          <Link to="/" className="flex items-center">
            {" "}
          </Link>{" "}
        </div>
      </nav>
    </header>
  );
};

export default header;
