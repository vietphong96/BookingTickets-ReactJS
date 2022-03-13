import React from "react";
import { Rate } from "antd";
export default function RatingStar(props) {
  let ramDom = Math.trunc(Math.random() * 5);

  console.log("value", ramDom);
  return (
    <span>
      <Rate value={ramDom} />
    </span>
  );
}
