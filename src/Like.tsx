import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Like = () => {
  const [heart1, showheart1] = useState(true);
  const [heart2, showheart2] = useState(false);

  return (
    <div
      className=" h-1 w-1 text-white"
      onClick={() => {
        showheart1((prev) => !prev);
        showheart2((prev) => !prev);
      }}>
      {heart1 && <AiFillHeart className="h-8 w-8 text-red-600" />}
      {heart2 && <AiOutlineHeart className="h-8 w-8 text-red-600" />}
    </div>
  );
};

export default Like;
