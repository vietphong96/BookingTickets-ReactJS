import axios from "axios";
import { history } from "../../App";
import { quanLyPhimServices } from "../../services/QuanLyPhimServices";
import { GET_LIST_FILM } from "../types/GetListFilm";
import { HIDE_LOADING, SHOW_LOADING } from "../types/Loadingtype";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimServices.layDanhSachPhim(tenPhim);

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: GET_LIST_FILM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SHOW_LOADING,
      });
      const result = await quanLyPhimServices.themphimUpLoadHinh(formData);
      console.log("result", result.data.content);

      dispatch({
        type: HIDE_LOADING,
      });
      alert("Thêm phim thành công ^^!");
      history.push("/admin/user");
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const capNhatPhimUpLoadAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimServices.capNhatPhimUpLoad(formData);
      console.log("result", result.data.content);
      alert("Cập Nhật phim thành công ^^!");
      // dispatch(GetListFilmAction());
      // history.push("/admin/user");
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const xoaPhimAction = (maphim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimServices.xoaPhim(maphim);
      alert("Xoá phim thành công !");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
