import { quanLyRapServices } from "../../services/QuanLyRapService";
import { LAY_THONG_TIN_PHIM } from "../types/QuanLyRapChieuType";

const LayThongTinPhimAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapServices.layThongTinPhim(id);
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_PHIM,
          thongTinPhim: result.data.content,
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};

export default LayThongTinPhimAction;
