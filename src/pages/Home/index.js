import React, { useEffect, useCallback } from "react";
import HomeMenu from "./HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film";
import MultipleRows from "../../components/RSlick/MultipleRowRSlick";
import { layDanhSachPhimAction } from "../../redux/actions/GetListFilmAction";
import heThongRapAction from "../../redux/actions/heThongRapAction";
import HomeCarousel from "../../templates/Layouts/Carousel";
function Home(props) {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("arrFilm", arrFilm);
  const { heThongRapChieu } = useSelector(
    (state) => state.QuanLyRapChieuReducer
  );

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(heThongRapAction());
  }, []);

  return (
    <div className="w-full">
      <HomeCarousel />
      <MultipleRows arrFilm={arrFilm} />

      <div className="mt-20 px-20">
        {" "}
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}

export default Home;
