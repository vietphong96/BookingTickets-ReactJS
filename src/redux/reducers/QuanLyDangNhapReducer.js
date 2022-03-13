import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { DANG_NHAP } from "../types/QuanLyNguoiDung";
let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
};
export const QuanLyDangNhapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = thongTinDangNhap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
