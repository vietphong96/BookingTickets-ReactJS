import { THONG_TIN_TAI_KHOAN } from "../types/QuanLyNguoiDung";

const stateDefault = {
  thongTinTaiKhoan: {},
};

export const QuanLyTaiKhoanReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THONG_TIN_TAI_KHOAN: {
      state.thongTinTaiKhoan = action.thongTinTaiKhoan;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
