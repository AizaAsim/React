// // import { useState, useCallback, useEffect, useRef } from "react";
// // import Random from "./Random";

import { useEffect, useRef, useState } from "react";

// import { useState } from "react";

// // import Like from "./Like";
// // import Alert from "./components/Alert";

// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { useState } from "react";

// // //COUNTER
// // function App() {
// //   const [counter, SetCounter] = useState(10);
// //   const AddValue = () => {
// //     SetCounter((prevvalue) => prevvalue + 1);
// //   };

// //   const RemoveValue = () => {
// //     SetCounter((prevvalue) => prevvalue - 1);
// //   };
// //   return (
// //     <div>
// //       <h1>Counter</h1>
// //       <h2>Counter:{counter}</h2>
// //       <button onClick={AddValue}>Add Value</button>
// //       <button onClick={RemoveValue}>Remove value</button>
// //     </div>
// //   );
// // }

// // import Card from "./components/Card";
// // <Card username="Aiza" myArr={newArr}></Card>
// // <Card username="Aiza"></Card>
// // <Card></Card> {/* Empty username */}

// // //PROP

// // // //COLOR CHANGER USING USE STATE
// // function App() {
// //   let [color, setColor] = useState("olive");
// //   let Changecolour1 = () => {
// //     setColor((color = "orange"));
// //   };

// //   let Changecolour2 = () => {
// //     setColor("pink");
// //   };

// //   return (
// //     <div
// //       className="flex items-center justify-center gap-20  w-full h-screen duration-200"
// //       style={{ backgroundColor: color }}>
// //       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
// //         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded 3xl">
// //           <button
// //             onClick={Changecolour1}
// //             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
// //             orange
// //           </button>

// //           <button
// //             onClick={Changecolour2}
// //             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
// //             pink
// //           </button>
// //           <button
// //             onClick={() => {
// //               setColor("red");
// //             }}
// //             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
// //             red{" "}
// //           </button>
// //           <button
// //             onClick={() => {
// //               setColor("yellow");
// //             }}
// //             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
// //             yellow{" "}
// //           </button>
// //           <button
// //             onClick={() => {
// //               setColor("black");
// //             }}
// //             className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">
// //             black
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// //PASSWORD GENERATOR
// // function App() {
// //   const [length, setLength] = useState(8);
// //   const [numberAllowed, setnumberAllowed] = useState(false);
// //   const [charAllowed, setcharAllowed] = useState(false);
// //   const [password, setPassword] = useState("");
// //   const generatePassword = useCallback(() => {
// //     let pass = "";
// //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// //     if (numberAllowed) str += "0123456789";
// //     if (charAllowed) str += "!@#$%^&*()_+";
// //     for (let i = 1; i < length; i++) {
// //       const char = Math.floor(Math.random() * str.length + 1);
// //       pass += str.charAt(char);
// //     }
// //     setPassword(pass);
// //   }, [length, numberAllowed, charAllowed]);
// //   useEffect(() => {
// //     generatePassword();
// //   }, [length, numberAllowed, charAllowed]);
// //   const passwordRef = useRef<HTMLInputElement | null>(null);
// //   const copyPassword = () => {
// //     window.navigator.clipboard.writeText(password);
// //     passwordRef.current?.select();
// //   };

// //   return (
// //     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
// //       <h1 className="text-3xl font-bold mb-2 text-center">
// //         Password Generator
// //       </h1>
// //       <div className="flex shadow rounded-lg overflow-hidden mb-4">
// //         <input
// //           type="text"
// //           value={password}
// //           className="outline-none w-full py-1 px-3"
// //           placeholder="Password"
// //           readOnly
// //           ref={passwordRef}
// //         />
// //         <button
// //           onClick={copyPassword}
// //           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
// //           copy
// //         </button>
// //       </div>
// //       <div className="flex text-sm gap-x-2">
// //         <div className="flex items-center gap-x-1">
// //           <input
// //             type="range"
// //             min={6}
// //             max={100}
// //             value={length}
// //             onChange={(e) => setLength(parseFloat(e.target.value))}
// //             name=""
// //             id=""
// //           />
// //           <label htmlFor="length">length:{length}</label>
// //         </div>
// //         <div className="flex text-sm gap-x-2">
// //           <input
// //             type="checkbox"
// //             defaultChecked={numberAllowed}
// //             onChange={() => {
// //               setnumberAllowed((prev) => !prev);
// //             }}
// //             name=""
// //             id=""
// //           />
// //           <label htmlFor="number">Numbers</label>
// //         </div>

// //         <div className="flex text-sm gap-x-2">
// //           <input
// //             type="checkbox"
// //             defaultChecked={charAllowed}
// //             onChange={() => {
// //               setcharAllowed((prev) => !prev);
// //             }}
// //             name=""
// //             id=""
// //           />
// //           <label htmlFor="char">Character</label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // function App() {
// //   const [number, setNumber] = useState("");
// //   const [zero, zeroallowed] = useState(false);
// //   const [length, setlength] = useState(4);

// //   let GenerateNumber = useCallback(() => {
// //     let num = " ";
// //     let str = "123456789";
// //     if (zero) {
// //       str += "0";
// //     }
// //     for (let i = 0; i < length; i++) {
// //       const char = Math.floor(Math.random() * str.length + 1);
// //       num += str.charAt(char);
// //     }
// //     setNumber(num);
// //   }, [length, zero]);
// //   useEffect(() => {
// //     GenerateNumber();
// //   }, [length, zero]);
// //   const copied = () => {
// //     window.navigator.clipboard.writeText(number);
// //     numref.current?.select();
// //   };
// //   const numref = useRef<HTMLInputElement | null>(null);
// //   return (
// //     <div
// //       className="
// //       w-full
// //       max-w-md
// //       mx-auto
// //       shadow-md
// //       rounded-lg
// //       px-4
// //       py-3
// //       my-8
// //       bg-gray-800
// //       text-pink-500">
// //       <h1 className="text-3xl font-bold mb-2 text-center">
// //         Random Number Generator
// //       </h1>

// //       <div className="flex shadow rounded-lg overflow-hidden mb-4">
// //         <input
// //           type="text"
// //           value={number}
// //           className="outline-none w-full py-1 px-3"
// //           placeholder="Number"
// //           readOnly
// //           ref={numref}
// //         />
// //         <button
// //           onClick={copied}
// //           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
// //           Copy
// //         </button>
// //       </div>

// //       <div className="flex text-sm gap-x-2">
// //         <div className="flex items-center gap-x-1">
// //           <input
// //             type="range"
// //             min={3}
// //             max={40}
// //             value={length}
// //             onChange={(e) => {
// //               setlength(parseFloat(e.target.value));
// //             }}
// //           />
// //           <label htmlFor="length">length:{length}</label>
// //         </div>

// //         <div className="flex text-sm gap-x-2">
// //           <input
// //             type="checkbox"
// //             defaultChecked={zero}
// //             onChange={() => zeroallowed(!zero)} // Update the state directly
// //           />
// //           <label htmlFor="number">zero</label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // function App() {
// //   const [number, setNumber] = useState("");
// //   const [zero, zeroallowed] = useState(false);
// //   const [length, setlength] = useState(4);

// //   let GenerateNumber = useCallback(() => {
// //     let num = " ";
// //     let str = "123456789";
// //     if (zero) {
// //       str += "0";
// //     }
// //     for (let i = 0; i < length; i++) {
// //       const char = Math.floor(Math.random() * str.length + 1);
// //       num += str.charAt(char);
// //     }
// //     setNumber(num);
// //   }, [length, zero]);
// //   useEffect(() => {
// //     GenerateNumber();
// //   }, [length, zero]);
// //   const copied = () => {
// //     window.navigator.clipboard.writeText(number);
// //     numref.current?.select();
// //   };
// //   const numref = useRef<HTMLInputElement | null>(null);
// //   return (
// //     <div
// //       className="
// //         w-full
// //         max-w-md
// //         mx-auto
// //         shadow-md
// //         rounded-lg
// //         px-4
// //         py-3
// //         my-8
// //         bg-gray-800
// //         text-pink-500">
// //       <h1 className="text-3xl font-bold mb-2 text-center">
// //         Random Number Generator
// //       </h1>

// //       <div className="flex shadow rounded-lg overflow-hidden mb-4">
// //         <input
// //           type="text"
// //           value={number}
// //           className="outline-none w-full py-1 px-3"
// //           placeholder="Number"
// //           readOnly
// //           ref={numref}
// //         />
// //         <button
// //           onClick={copied}
// //           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
// //           Copy
// //         </button>
// //       </div>

// //       <div className="flex text-sm gap-x-2">
// //         <div className="flex items-center gap-x-1">
// //           <input
// //             type="range"
// //             min={3}
// //             max={40}
// //             value={length}
// //             onChange={(e) => {
// //               setlength(parseFloat(e.target.value));
// //             }}
// //           />
// //           <label htmlFor="length">length:{length}</label>
// //         </div>

// //         <div className="flex text-sm gap-x-2">
// //           <input
// //             type="checkbox"
// //             defaultChecked={zero}
// //             onChange={() => zeroallowed(!zero)} // Update the state directly
// //           />
// //           <label htmlFor="number">zero</label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // // }
// // import Button1 from "./components/Button1";
// // import Alert from "./components/Alert";
// // import { useState } from "react";
// // function App() {
// //   const [alertVisible, setAlertVisibility] = useState(false);
// //   return (
// //     <div>
// //       {alertVisible && <Alert>My alert</Alert>}
// //       <Button1
// //         onClick={() => setAlertVisibility((prev) => !prev)}
// //         color="pink">
// //         My Button
// //       </Button1>
// //     </div>
// //   );
// // // }

// // import Alertt from "./components/Alertt";
// // import Button2 from "./Button2";
// // import { useState } from "react";
// // function App() {
// //   const [visibility, SetVisibility] = useState(false);

// //   return (
// //     <div>
// //       {visibility && (
// //         <Alertt
// //           onClick={() => {
// //             SetVisibility((prev) => !prev);
// //           }}>
// //           Alert
// //         </Alertt>
// //       )}
// //       <Button2
// //         onClick={() => {
// //           SetVisibility((prev) => !prev);
// //         }}
// //         color="orange">
// //         Show
// //       </Button2>
// //     </div>
// //   );
// // // }

// // function App() {
// //   const [drink, setDrink] = useState({
// //     title: "Americano",
// //     price: 5,
// //   });
// //   const handleClick = () => {
// //     setDrink({ ...drink, price: 6 });
// //   };
// //   return (
// //     <div>
// //       {drink.price}
// //       <button onClick={handleClick}>click Me</button>
// //     </div>
// //   );
// // }
// // // // export default App;
// // function App(){
// //   const[tags,setTags]=useState(['happy','cheerful']);
// //   const handleClick=()=>{
// // setTags([...tags,'exciting']);

// // setTags(tags.filter(tag=> tag!=='happy'));
// // setTags(tags.map(tag=> tag==='happy' ? 'happiness':tag))
// //   };
// // return(
// // <div>
// //   <button onClick={handleClick}>CLick Me</button>
// // </div>

// // )

// // }
// // import produce from "immer";
// // function App(){
// //   const[bugs,setBugs]=useState(

// //     [
// //       {id:1 ,title:'Bug 1' ,fixed:false},
// //       {id:2,title:'Bug2',fixed:false},
// //     ]
// //   );
// // const handleClick=()=>{

// //   setBugs(produce(drafts=>{
// //     drafts.find(bug=>bug.id===1)
// //     if(bugs) bugs.fixed=true;
// //   }))
// // };

// // return(
// //   <div>
// //     {
// //       bugs.map
// //     }
// //   </div>
// // )

// // }
// // import Navbar from "./components/Navbar";
// // // Remove { default } if Cart.tsx does not have a default export
// // import Cart from "./components/Cart";
// // function App() {
// //   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
// //   return (
// //     <div>
// //       <Navbar cartItemsCount={cartItems.length}></Navbar>
// //       <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
// //     </div>
// //   );
// // }
// // // export default App;

// // function App() {
// //   const [pizza, setPizza] = useState({
// //     name: "Spicy Pepperoni",
// //     toppings: ["Mushroom"],
// //   });
// //   const handleClick = () => {
// //     const updatedToppings = [...pizza.toppings, "Cheese"];
// //     setPizza({ ...pizza, toppings: updatedToppings });
// //   };

// //   return <div></div>;
// // // // }
// // import ExpandableText from "./components/ExpandableText";
// // function App() {
// //   return (
// //     <div>
// //       <ExpandableText>
// //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et est
// //         nemo labore reprehenderit quaerat adipisci ut enim! Deleniti
// //         aperiam sed, facere iure in pariatur nostrum, nesciunt reiciendis
// //         voluptas maxime amet sunt commodi tenetur et laudantium corporis
// //         dignissimos illo nihil nisi assumenda temporibus laborum veniam!
// //         Architecto impedit rem neque ipsa officiis exercitationem maxime
// //         voluptatem necessitatibus minima porro! Omnis pariatur eveniet,
// //         cupiditate sint hic minima similique doloremque rem. Ducimus porro
// //         voluptatibus blanditiis aliquid nostrum iure architecto molestias
// //         neque quod perferendis modi, numquam cumque facilis quo mollitia?
// //         Id minus tenetur nemo tempore atque itaque accusamus expedita
// //         voluptatem porro. Natus dolor impedit ducimus eos.
// //       </ExpandableText>
// //     </div>
// //   );
// // }

// // import ProjectForm from "./expense-tracker/ProjectForm";
// import Expenselist from "./expense-tracker/components/Expenselist";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

// import ProjectForm from "./expense-tracker/components/ProjectForm";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, SetExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 3, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 4, description: "aaa", amount: 10, category: "Entertainment" },
//   ]);
//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-3">
//         <div>
//           <ProjectForm  onSubmit={expense=>SetExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
//           <ExpenseFilter
//             onSelectCategory={(category) => setSelectedCategory(category)}
//           />{" "}
//           <Expenselist
//             expenses={visibleExpenses}
//             onDelete={(id) =>
//               SetExpenses(expenses.filter((e) => e.id !== id))
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

//Expense Tracker
/////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import Expenselist from "./expense-tracker/components/Expenselist";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ProjectForm from "./expense-tracker/components/ProjectForm";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 3, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 4, description: "aaa", amount: 10, category: "Entertainment" },
//   ]);

//   // Function to add a new expense

// //   // Filter visible expenses based on selected category
// //   const visibleExpenses = selectedCategory
// //     ? expenses.filter((expense) => expense.category === selectedCategory)
// //     : expenses;

// //   return (
// //     <div>
// //       <div className="mb-3">
// //         <div>
// //           {/* Pass the addExpense function to the ProjectForm component */}

// //           <ProjectForm
// //             onSubmit={(data) =>
// //               setExpenses([
// //                 ...expenses,
// //                 {
// //                   id: expenses.length + 1,
// //                   description: data.Description,
// //                   amount: data.Amount,
// //                   category: data.Category,
// //                 },
// //               ])
// //             }
// //           />

// //           {/* Pass the onSelectCategory function to the ExpenseFilter component */}
// //           <ExpenseFilter onSelectCategory={setSelectedCategory} />
// //           {/* Pass the visibleExpenses and onDelete functions to the Expenselist component */}
// //           <Expenselist
// //             expenses={visibleExpenses}
// //             onDelete={(id) =>
// //               setExpenses(expenses.filter((e) => e.id !== id))
// //             }
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// ///////////////////Expense Tracker

// // function App() {
// //   const ref = useRef<HTMLInputElement>(null);
// //   useEffect(() => {
// //     if (ref.current) ref.current.focus();
// //   });
// //   //side Effect
// //   useEffect(() => {
// //     document.title = "My App";
// //   });
// //   return (
// //     <div>
// //       <input type="text" ref={ref} className="form-control" />
// //     </div>
// //   );
// // }
// // export default App;

// // import React from "react";
// // import { useState } from "react";
// // import ProductList from "./ProductList";

// // const App = () => {
// //   const [Category, setCategory] = useState("");

// //   return (
// //     <div>
// //       <select
// //         name=""
// //         id=""
// //         className="form-select"
// //         onChange={(event) => setCategory(event.target.value)}>
// //         <option value=""></option>
// //         <option value="Clothing">Clothing</option>
// //         <option value="Household">Household</option>
// //       </select>
// //       <ProductList category={Category}></ProductList>
// //     </div>
// //   );
// // };

// // export default App;

// // const connect=()=>console.log('Connecting');
// // const disconnect=()=> console.log('Disconnecting');

// function App(){

//   useEffect(()=>{
// connect();
// return ()=>disconnect();

//   })
// // }
// import axios from "axios";
// import { literal } from "zod";
// interface User{
// id:number;
// name:string;
// }
// function App() {
//   const [users, setusers] = useState<User[]>([]);
//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users")
//       .then( res=> setusers(res.data));
//   },[]);
//   return (<div>
// <ul>
//   {users.map(user=> <li key={user.id}>{user.name} </li>)}
// </ul>
//   </div>);
// }
// export default App;

// import axios, { AxiosError, CanceledError } from "axios";
// import apiClient from "./api-client";
// import userService from "./services/user-service";
// import { User } from "./services/user-service";
// function App() {
//   const [users, setusers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     // const controller = new AbortController();

//     //get-> [promise -> res/err
//     // const fetchusers = async () => {
//     //   try{const res = await
//     setLoading(true);
//     const{request,cancel} = userService.getAllUsers() ;
//     request.then((res) => {
//         setusers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) setError(err.message);
//         setLoading(false);
//       });
//     // .finally(()=> {
//     //   setLoading(false);
//     // });

//     return () => cancel();
//   }, []);

//   const deleteUser = (user: User) => {
//     const originalusers = [...users];
//     setusers(users.filter((u) => u.id !== user.id));
//     userService.getAllUser.delete("/users/" + user.id).catch((err) => {
//       setError(err.message);
//       setusers(originalusers);
//     });
//   };
//   const addUser = () => {
//     const originalusers = [...users];
//     const newUser = { id: 0, name: "Mosh" };
//     setusers([newUser, ...users]);
//     apiClient
//       .post("/users", newUser)
//       .then(({ data: savedUser }) => setusers([savedUser, ...users]))
//       .catch((err) => {
//         setError(err.message);
//         setusers(originalusers);
//       });
//   };
//   const Updateuser = (user: User) => {
//     const originalusers = [...users];

//     const updatedUser = { ...user, name: user.name + "!" };
//     setusers(users.map((u) => (u.id === user.id ? updatedUser : u)));
//     apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
//       setError(err.message);
//       setusers(originalusers);
//     });
//   };
//   return (
//     <div>
//       {error && <p className="text-red-600">{error}</p>}
//       <ul className="divide-y divide-gray-200">
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name}{" "}
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               onClick={() => Updateuser(user)}>
//               {" "}
//               update
//             </button>
//           </li>
//         ))}
//         <div className="flex justify-center items-center">
//           {isLoading && (
//             <div className="w-16 h-16 border-4 border-gray-300 rounded-full animate-spin"></div>
//           )}
//         </div>
//       </ul>
//     </div>
//   );
// }

// // export default App;
// import useCurrencyInfo from "./components/useCurrencyInfo";
// import InputBox from "./components/InputBox";
// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);
//   const currencyInfo = useCurrencyInfo(from);
//   const options = Object.keys(currencyInfo);
//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to]);
//   };
//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   return (
//     <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}>
//             <div className="w-full mb-1">
//               <InputBox
//                 label="from"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 onAmountChange={(amount) => setAmount(amount)}
//                 selectedCurrency={from}
//                 amountDisabled={false}
//                 currencyDisabled={false}
//                 className={""}></InputBox>
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 className="absolue left-11/2 -translate-x-1/2-translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}>
//                 Swap
//               </button>
//             </div>

//             <div className="w-full mb-1">
//               <InputBox
//                 label="to"
//                 amount={convertedAmount}
//                 amountDisabled={true}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 onAmountChange={(amount) => setAmount(amount)}
//                 selectedCurrency={to}
//                 currencyDisabled={false}
//                 className={""}></InputBox>
//             </div>
//             <button type="submit" className="w-full bg-blue">
//               Convert {from} to {to}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import Layout1 from "./components/Layout1";
// function App() {
//   return <Layout1></Layout1>;
// }
// export default App;import React, { useState } from 'react';
import List from "./Project2/components/List";
import Filter from "./Project2/components/Filter";
import Form4 from "./Project2/Form4";
function App() {
  const [Expenses, SetExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      Amount: 1,
      Category: "Groceries",
    },
    {
      id: 2,
      description: "aaa",
      Amount: 11,
      Category: "Groceries",
    },
  ]);

  const [Category, SetCategory] = useState("");

  const visibleExpenses = Category
    ? Expenses.filter((e) => e.Category === Category)
    : Expenses;

  return (
    <>
      <Form4
        onSubmit={(res) => {
          SetExpenses([
            ...Expenses,
            {
              ...res,
              id: Expenses.length + 1,
              description: res.Description,
              Amount: res.Amount,
              Category: res.Category,
            },
          ]);
        }}></Form4>
      <Filter onSelectCategory={(category) => SetCategory(category)} />
      <List
        expenses={visibleExpenses}
        OnDelete={(res) =>
          SetExpenses(visibleExpenses.filter((e) => e.id !== res))
        }
      />
    </>
  );
}

export default App;
