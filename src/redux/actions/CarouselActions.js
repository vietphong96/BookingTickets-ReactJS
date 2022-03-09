import axios from "axios";
import { quanLyPhimServices } from "../../services/QuanLyPhimServices";
import { DOMAIN } from "../../utils/settings/config";

export const getCarouselAction = async (dispatch) => {
  try {
    const result = await quanLyPhimServices.layDanhSachBanner();
    dispatch({
      type: "SET_CAROUSEL",
      arrBanner: result.data.content,
    });
  } catch (err) {
    console.log("error", err);
  }
};
