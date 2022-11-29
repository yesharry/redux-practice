import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      this is box {count}
      <GrandSonBox />
    </div>
  );
  // 굳이 props로 넘길 필요가 없음!
};

export default Box;
