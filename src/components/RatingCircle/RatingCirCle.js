import React from "react";
import { ProgressCircle } from "react-simple-circle-rating";
function RatingCirCle(props) {
  const ramDom = Math.trunc(Math.random() * 4);
  console.log(ramDom);

  return (
    <>
      <ProgressCircle
        percentage={props.danhGia * ramDom}
        color={["#00bd00", "#ffb01f", "#ff3d3d"]}
        colorBackground="#4d4d4d"
        textColor="#3d3d3d"
        size={40}
      />
    </>
  );
}

export default RatingCirCle;
