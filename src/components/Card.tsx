// import React from "react";
function Card({
  username = "Xyz",
  myArr = [],
}: {
  username?: string;
  myArr?: number[];
}) {
  return (
    <div>
      <h1 className="text-xl bg-green-500 p-3">A card for photos</h1>
      <p>
        {" "}
        {username}
        {myArr}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur repudiandae provident officia eius rem vitae?
      </p>
    </div>
  );
}

export default Card;
