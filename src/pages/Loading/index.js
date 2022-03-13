import React from "react";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "99",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src={require("../../assets/loading.gif")}
      />
    </div>
  );
}

export default Loading;
