import { quanLyRapServices } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP } from "../types/QuanLyRapChieuType";

const heThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapServices.layLichChieuHeThongRap();

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};
export default heThongRapAction;
