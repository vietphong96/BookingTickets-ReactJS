import { FaLiraSign } from "react-icons/fa";
import {
  GET_LIST_FILM,
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU,
  PHIM_TONG_HOP,
} from "../types/GetListFilm";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 9427,
      tenPhim: "Trạng Tí Phiêu Lưu Ký 121",
      biDanh: "trang-ti-phieu-luu-ky-121",
      trailer: "https://youtu.be/sx1ROHCmY-4",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.jpg",
      moTa: "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-03-09T23:02:37.647",
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  dangChieu: false,
  sapChieu: false,
  tongHop: true,
  arrDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_LIST_FILM: {
      state.arrFilm = action.arrFilm;
      state.arrDefault = action.arrFilm;
      console.log("arrDefault", state.arrDefault);
      return { ...state };
    }
    case PHIM_SAP_CHIEU: {
      const newArr = state.arrDefault.filter((film) => film.sapChieu);
      state.arrFilm = newArr;
      state.sapChieu = !state.sapChieu;
      if (state.dangChieu) {
        state.dangChieu = !state.dangChieu;
      }
      if (state.tongHop) {
        state.tongHop = !state.tongHop;
      }
      console.log("work sap chieu", newArr);
      return { ...state };
    }
    case PHIM_DANG_CHIEU: {
      const newArr = state.arrDefault.filter((film) => film.dangChieu);
      state.arrFilm = newArr;
      state.dangChieu = !state.dangChieu;
      if (state.tongHop) {
        state.tongHop = !state.tongHop;
      }
      if (state.sapChieu) {
        state.sapChieu = !state.sapChieu;
      }
      console.log("work dang chieu", newArr);
      return { ...state };
    }
    case PHIM_TONG_HOP: {
      const newArr = state.arrDefault;
      state.arrFilm = newArr;
      state.tongHop = !state.tongHop;
      if (state.dangChieu) {
        state.dangChieu = !state.dangChieu;
      }
      if (state.sapChieu) {
        state.sapChieu = !state.sapChieu;
      }
      console.log("work tong hop", newArr);
      return { ...state };
    }
    default:
      return state;
  }
};
