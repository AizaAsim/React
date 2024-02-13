import { useState } from "react";

function ListGroup() {
  let items = ["NewYork", "San Francisco", "Tokyo", "London"];
  const [selectedIndex, setindex] = useState(-1);
  const [name, setname] = useState(" ");

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      {items.map((item, index) => (
        <ul
          className={
            selectedIndex === index
              ? "text-blue-500 hover:text-blue-700"
              : "bg-white"
          }>
          <li
            key={item}
            onClick={() => {
              setindex(index);
            }}>
            {item}
          </li>
        </ul>
      ))}
    </>
  );
}
export default ListGroup;
