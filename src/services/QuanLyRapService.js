import { DOMAIN, GROUPID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapServices extends baseService {
  constructor() {
    super();
  }

  layLichChieuHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinPhim = (id) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };
}

export const quanLyRapServices = new QuanLyRapServices();
