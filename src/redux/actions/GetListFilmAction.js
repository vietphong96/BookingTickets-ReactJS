import axios from "axios";
import { quanLyPhimServices } from "../../services/QuanLyPhimServices";
import { GET_LIST_FILM } from "../types/GetListFilm";

export const GetListFilmAction = async (dispatch) => {
  try {
    const result = await quanLyPhimServices.layDanhSachPhim();
    dispatch({
      type: GET_LIST_FILM,
      arrFilm: result.data.content,
    });
    console.log(result);
  } catch (err) {
    console.log("err", err);
  }
};
