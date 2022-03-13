import { DAT_GHE, DAT_VE } from "../types/DatVe";

const stateDefault = {
  chiTietPhongVe: {},
  danhsachDatGhe: [],
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

    default:
      return { ...state };
  }
};
