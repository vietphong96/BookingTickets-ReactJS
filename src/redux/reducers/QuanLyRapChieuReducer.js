import { SET_HE_THONG_RAP } from "../types/QuanLyRapChieuType";

const stateDefault = {
  heThongRapChieu: [],
};

export const QuanLyRapChieuReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
