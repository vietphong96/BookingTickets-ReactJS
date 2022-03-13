import { baseService } from "./baseService";

export class QuanLyNguoiDungServices extends baseService {
  constructor() {
    super();
  }

  thongTinDangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
