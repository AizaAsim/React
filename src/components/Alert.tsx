import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div>
      <div
        className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md"
        role="alert">
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-blue-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M10 12h2v2h-2v-2zm0-8h2v6h-2V4z" />
            </svg>
          </div>
          <div>
            <p className="font-bold"> {children}</p>
            <p className="text-sm">
              This is a primary alert—check it out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// function Alert(){}

export default Alert;
