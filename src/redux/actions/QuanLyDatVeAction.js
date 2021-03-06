import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DAT_VE, HOAN_THANH_DAT_VE } from "../types/DatVe";
import { SHOW_LOADING, HIDE_LOADING } from "../types/Loadingtype";
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
      dispatch({
        type: SHOW_LOADING,
      });
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result);

      await dispatch({
        type: HOAN_THANH_DAT_VE,
      });

      await dispatch({
        type: HIDE_LOADING,
      });

      // await dispatch({
      //   type: CHUYEN_TAB,
      // });
      window.location.reload();
    } catch (err) {
      console.log("err");
      dispatch({
        type: HIDE_LOADING,
      });
    }
  };
};
