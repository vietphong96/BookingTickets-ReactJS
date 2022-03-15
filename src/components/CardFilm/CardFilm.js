import React, { useState } from "react";
import "./styleCard.css";
import { FaPlayCircle, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ModalVideoComponent from "../Modalvideo";
import { Modal, Button } from "antd";

function CardFilm(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

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
              <Button
                style={{
                  position: "absolute",
                  zIndex: "9999",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  top: "45%",
                  border: "none",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                type="primary"
                onClick={showModal}
              >
                <FaPlayCircle style={{ fontSize: "60px" }} />
              </Button>
              <Modal
                title={film.tenPhim}
                visible={isModalVisible}
                onOk={handleOk}
              >
                <ModalVideoComponent idFilm={film.trailer.slice(-11)} />
                <Button
                  style={{ marginLeft: "85%" }}
                  onClick={handleOk}
                  className="btn btn-success mt-5"
                >
                  Close
                </Button>
              </Modal>
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
        <NavLink to={`/detail/${film.maPhim}`}>ĐẶT VÉ</NavLink>
      </button>
    </div>
  );
}

export default CardFilm;
