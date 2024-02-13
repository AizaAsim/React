import React from "react";

function Nav({
  logo = "none",
  phone = "0000",
}: {
  logo?: string;
  phone?: string;
}) {
  return (
    <div className="border-solid border-black-100 bg-orange-200 flex justify-between">
      <h1>{logo}</h1>
      <p className="bg-pink">{phone}</p>
    </div>
  );
}
export default Nav;
