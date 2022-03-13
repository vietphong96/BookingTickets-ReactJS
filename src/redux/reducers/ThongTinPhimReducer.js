import { LAY_THONG_TIN_PHIM } from "../types/QuanLyRapChieuType";

const stateDefault = {
  thongTinPhim: {},
};

export const ThongTinPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
