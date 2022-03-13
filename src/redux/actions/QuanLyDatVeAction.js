import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DAT_VE } from "../types/DatVe";

export const QuanLyDatVeAction = (maChieuPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layThongTinDatVe(maChieuPhim);
      dispatch({
        type: DAT_VE,
        chiTietPhongVe: result.data.content,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);
    } catch (err) {
      console.log("err");
    }
  };
};
