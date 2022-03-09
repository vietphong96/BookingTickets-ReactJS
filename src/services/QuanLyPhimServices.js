import { baseService } from "./baseService";

export class QuanLyPhimServices extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);
  };
}

export const quanLyPhimServices = new QuanLyPhimServices();
