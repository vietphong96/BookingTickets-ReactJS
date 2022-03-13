import React from "react";
import "./styleCard.css";
import { FaPlayCircle, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function CardFilm(props) {
  const { film } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="flip-card my-2">
        <div className="flip-card-inner">
          <div
            style={{
              backgroundImage: `url(${film.hinhAnh})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="flip-card-front"
          >
            <img
              className="opacity-0"
              src={film.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${film.hinhAnh})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="flip-card-back"
          >
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                width: 300,
                height: 300,
                position: "fixed",
                zIndex: "3",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  zIndex: "9999",
                  fontSize: "60px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "50px",
                  height: "50px",
                }}
              >
                <FaPlayCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c4c4c4",
          height: "35px",
          width: "70%",
          borderRadius: "5px",
        }}
      >
        <FaStore />
        <NavLink to={`/detail/${film.maPhim}`}>Booking Tickets</NavLink>
      </button>
    </div>
  );
}

export default CardFilm;
