import { quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP, THONG_TIN_TAI_KHOAN } from "../types/QuanLyNguoiDung";
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
        history.push("/home");
      }
    } catch (err) {
      console.log("err", err);
      alert("Tài khoản không chính xác!");
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungServices.thongTinDangKy(
        thongTinDangKy
      );
      if (result.data.statusCode === 200) {
        alert("Đăng ký thành công ^^ !");
        history.push("/login");
      }
    } catch (err) {
      console.log("err", err.response.statusCode);
    }
  };
};

export const thongTinTaiKhoanAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungServices.thongTinTaiKhoan();

      dispatch({
        type: THONG_TIN_TAI_KHOAN,
        thongTinTaiKhoan: result.data.content,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};
