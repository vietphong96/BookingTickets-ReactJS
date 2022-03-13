import {
  CHUYEN_TAB,
  CHUYEN_TAB_HANDLE,
  DAT_GHE,
  DAT_VE,
  HOAN_THANH_DAT_VE,
} from "../types/DatVe";

const stateDefault = {
  chiTietPhongVe: {},
  danhsachDatGhe: [],
  tabDefault: "1",
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }

    case DAT_GHE: {
      let danhSachGheCapNhat = [...state.danhsachDatGhe];

      let index = danhSachGheCapNhat?.findIndex(
        (ghe) => ghe.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.ghe);
        state.danhsachDatGhe = danhSachGheCapNhat;
      }
      return { ...state };
    }

    case HOAN_THANH_DAT_VE: {
      state.danhsachDatGhe = [];
      return { ...state };
    }
    case CHUYEN_TAB: {
      state.tabDefault = "2";
      return { ...state };
    }

    case CHUYEN_TAB_HANDLE: {
      state.tabDefault = action.number;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
