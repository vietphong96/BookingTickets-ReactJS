import { quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP } from "../types/QuanLyNguoiDung";
import { history } from "../../App";
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungServices.thongTinDangNhap(
        thongTinDangNhap
      );
      console.log("Result", result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP,
          thongTinDangNhap: result.data.content,
        });
        history.goBack();
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};
