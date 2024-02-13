import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
function Alertt({ children, onClick }: Props) {
  return (
    <div
      className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
      role="alert">
      <strong className="font-bold">{children}</strong>
      <span className="block sm:inline">
        {" "}
        Your alert message goes here.
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <button
          onClick={onClick}
          className="text-blue-500 hover:text-blue-700"
          role="button">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.357 5.652a.5.5 0 1 0-.707.708L9.293 10l-3.64 3.643a.5.5 0 1 0 .707.708L10 10.707l3.643 3.64a.5.5 0 0 0 .708-.707L10.707 10l3.64-3.643a.5.5 0 0 0 0-.705z" />
          </svg>
        </button>
      </span>
    </div>
  );
}
export default Alertt;
