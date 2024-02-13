import { useState, useCallback, useEffect, useRef } from "react";
function Random() {
  const [number, setNumber] = useState("");
  const [zero, zeroallowed] = useState(false);
  const [length, setlength] = useState(4);

  let GenerateNumber = useCallback(() => {
    let num = " ";
    let str = "123456789";
    if (zero) {
      str += "0";
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      num += str.charAt(char);
    }
    setNumber(num);
  }, [length, zero]);
  useEffect(() => {
    GenerateNumber();
  }, [length, zero]);
  const copied = () => {
    window.navigator.clipboard.writeText(number);
    numref.current?.select();
  };
  const numref = useRef<HTMLInputElement | null>(null);
  return (
    <div
      className="
        w-full
        max-w-md
        mx-auto
        shadow-md
        rounded-lg
        px-4
        py-3
        my-8
        bg-gray-800
        text-pink-500">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Random Number Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={number}
          className="outline-none w-full py-1 px-3"
          placeholder="Number"
          readOnly
          ref={numref}
        />
        <button
          onClick={copied}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={3}
            max={40}
            value={length}
            onChange={(e) => {
              setlength(parseFloat(e.target.value));
            }}
          />
          <label htmlFor="length">length:{length}</label>
        </div>

        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            defaultChecked={zero}
            onChange={() => zeroallowed(!zero)} // Update the state directly
          />
          <label htmlFor="number">zero</label>
        </div>
      </div>
    </div>
  );
}
export default Random;
