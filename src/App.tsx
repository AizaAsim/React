// import { useState, useCallback, useEffect, useRef } from "react";
// import Random from "./Random";

import { useState } from "react";

// import Like from "./Like";
// import Alert from "./components/Alert";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useState } from "react";

// //COUNTER
// function App() {
//   const [counter, SetCounter] = useState(10);
//   const AddValue = () => {
//     SetCounter((prevvalue) => prevvalue + 1);
//   };

//   const RemoveValue = () => {
//     SetCounter((prevvalue) => prevvalue - 1);
//   };
//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>Counter:{counter}</h2>
//       <button onClick={AddValue}>Add Value</button>
//       <button onClick={RemoveValue}>Remove value</button>
//     </div>
//   );
// }

// import Card from "./components/Card";
// <Card username="Aiza" myArr={newArr}></Card>
// <Card username="Aiza"></Card>
// <Card></Card> {/* Empty username */}

// //PROP

// // //COLOR CHANGER USING USE STATE
// function App() {
//   let [color, setColor] = useState("olive");
//   let Changecolour1 = () => {
//     setColor((color = "orange"));
//   };

//   let Changecolour2 = () => {
//     setColor("pink");
//   };

//   return (
//     <div
//       className="flex items-center justify-center gap-20  w-full h-screen duration-200"
//       style={{ backgroundColor: color }}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded 3xl">
//           <button
//             onClick={Changecolour1}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
//             orange
//           </button>

//           <button
//             onClick={Changecolour2}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
//             pink
//           </button>
//           <button
//             onClick={() => {
//               setColor("red");
//             }}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
//             red{" "}
//           </button>
//           <button
//             onClick={() => {
//               setColor("yellow");
//             }}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
//             yellow{" "}
//           </button>
//           <button
//             onClick={() => {
//               setColor("black");
//             }}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
//             black
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
//PASSWORD GENERATOR
// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [charAllowed, setcharAllowed] = useState(false);
//   const [password, setPassword] = useState("");
//   const generatePassword = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*()_+";
//     for (let i = 1; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed]);
//   useEffect(() => {
//     generatePassword();
//   }, [length, numberAllowed, charAllowed]);
//   const passwordRef = useRef<HTMLInputElement | null>(null);
//   const copyPassword = () => {
//     window.navigator.clipboard.writeText(password);
//     passwordRef.current?.select();
//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className="text-3xl font-bold mb-2 text-center">
//         Password Generator
//       </h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPassword}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//           copy
//         </button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             onChange={(e) => setLength(parseFloat(e.target.value))}
//             name=""
//             id=""
//           />
//           <label htmlFor="length">length:{length}</label>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             onChange={() => {
//               setnumberAllowed((prev) => !prev);
//             }}
//             name=""
//             id=""
//           />
//           <label htmlFor="number">Numbers</label>
//         </div>

//         <div className="flex text-sm gap-x-2">
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             onChange={() => {
//               setcharAllowed((prev) => !prev);
//             }}
//             name=""
//             id=""
//           />
//           <label htmlFor="char">Character</label>
//         </div>
//       </div>
//     </div>
//   );
// }
// function App() {
//   const [number, setNumber] = useState("");
//   const [zero, zeroallowed] = useState(false);
//   const [length, setlength] = useState(4);

//   let GenerateNumber = useCallback(() => {
//     let num = " ";
//     let str = "123456789";
//     if (zero) {
//       str += "0";
//     }
//     for (let i = 0; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length + 1);
//       num += str.charAt(char);
//     }
//     setNumber(num);
//   }, [length, zero]);
//   useEffect(() => {
//     GenerateNumber();
//   }, [length, zero]);
//   const copied = () => {
//     window.navigator.clipboard.writeText(number);
//     numref.current?.select();
//   };
//   const numref = useRef<HTMLInputElement | null>(null);
//   return (
//     <div
//       className="
//       w-full
//       max-w-md
//       mx-auto
//       shadow-md
//       rounded-lg
//       px-4
//       py-3
//       my-8
//       bg-gray-800
//       text-pink-500">
//       <h1 className="text-3xl font-bold mb-2 text-center">
//         Random Number Generator
//       </h1>

//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={number}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Number"
//           readOnly
//           ref={numref}
//         />
//         <button
//           onClick={copied}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//           Copy
//         </button>
//       </div>

//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={3}
//             max={40}
//             value={length}
//             onChange={(e) => {
//               setlength(parseFloat(e.target.value));
//             }}
//           />
//           <label htmlFor="length">length:{length}</label>
//         </div>

//         <div className="flex text-sm gap-x-2">
//           <input
//             type="checkbox"
//             defaultChecked={zero}
//             onChange={() => zeroallowed(!zero)} // Update the state directly
//           />
//           <label htmlFor="number">zero</label>
//         </div>
//       </div>
//     </div>
//   );
// }
// function App() {
//   const [number, setNumber] = useState("");
//   const [zero, zeroallowed] = useState(false);
//   const [length, setlength] = useState(4);

//   let GenerateNumber = useCallback(() => {
//     let num = " ";
//     let str = "123456789";
//     if (zero) {
//       str += "0";
//     }
//     for (let i = 0; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length + 1);
//       num += str.charAt(char);
//     }
//     setNumber(num);
//   }, [length, zero]);
//   useEffect(() => {
//     GenerateNumber();
//   }, [length, zero]);
//   const copied = () => {
//     window.navigator.clipboard.writeText(number);
//     numref.current?.select();
//   };
//   const numref = useRef<HTMLInputElement | null>(null);
//   return (
//     <div
//       className="
//         w-full
//         max-w-md
//         mx-auto
//         shadow-md
//         rounded-lg
//         px-4
//         py-3
//         my-8
//         bg-gray-800
//         text-pink-500">
//       <h1 className="text-3xl font-bold mb-2 text-center">
//         Random Number Generator
//       </h1>

//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={number}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Number"
//           readOnly
//           ref={numref}
//         />
//         <button
//           onClick={copied}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//           Copy
//         </button>
//       </div>

//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={3}
//             max={40}
//             value={length}
//             onChange={(e) => {
//               setlength(parseFloat(e.target.value));
//             }}
//           />
//           <label htmlFor="length">length:{length}</label>
//         </div>

//         <div className="flex text-sm gap-x-2">
//           <input
//             type="checkbox"
//             defaultChecked={zero}
//             onChange={() => zeroallowed(!zero)} // Update the state directly
//           />
//           <label htmlFor="number">zero</label>
//         </div>
//       </div>
//     </div>
//   );
// // }
// import Button1 from "./components/Button1";
// import Alert from "./components/Alert";
// import { useState } from "react";
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && <Alert>My alert</Alert>}
//       <Button1
//         onClick={() => setAlertVisibility((prev) => !prev)}
//         color="pink">
//         My Button
//       </Button1>
//     </div>
//   );
// // }

// import Alertt from "./components/Alertt";
// import Button2 from "./Button2";
// import { useState } from "react";
// function App() {
//   const [visibility, SetVisibility] = useState(false);

//   return (
//     <div>
//       {visibility && (
//         <Alertt
//           onClick={() => {
//             SetVisibility((prev) => !prev);
//           }}>
//           Alert
//         </Alertt>
//       )}
//       <Button2
//         onClick={() => {
//           SetVisibility((prev) => !prev);
//         }}
//         color="orange">
//         Show
//       </Button2>
//     </div>
//   );
// }

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>click Me</button>
    </div>
  );
}
export default App;