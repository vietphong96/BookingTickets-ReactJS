import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { GetListFilmAction } from "../../redux/actions/GetListFilmAction";
import {
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU,
  PHIM_TONG_HOP,
} from "../../redux/types/GetListFilm";
import "../Button/Button.css";
import CardFilm from "../CardFilm/CardFilm";
import Film from "../Film";

function MultipleRowRSlick() {
  const dispatch = useDispatch();
  const { arrFilm, sapChieu, dangChieu, tongHop } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const activeDangChieu = dangChieu ? "active_button" : "non_active_button";
  const activeSapChieu = sapChieu ? "active_button" : "non_active_button";
  const activeTongHop = tongHop ? "active_button" : "non_active_button";

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return <CardFilm film={film} key={index} />;
    });
  };

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    speed: 500,
    rows: 2,
  };
  return (
    <div className="px-24">
      <button
        onClick={() => {
          dispatch({ type: PHIM_TONG_HOP });
        }}
        className={`button button2 ${activeTongHop}`}
      >
        PHIM TỔNG HỢP
      </button>
      <button
        onClick={() => {
          dispatch({ type: PHIM_SAP_CHIEU });
        }}
        className={`button button2  ${activeSapChieu}`}
      >
        PHIM SẮP RA MẮT
      </button>
      <button
        onClick={() => {
          dispatch({ type: PHIM_DANG_CHIEU });
        }}
        className={`button button2  ${activeDangChieu}`}
      >
        PHIM ĐANG CHIẾU
      </button>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
}

export default MultipleRowRSlick;
