import { baseService } from "./baseService";

export class QuanLyNguoiDungServices extends baseService {
  constructor() {
    super();
  }

  thongTinDangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  thongTinTaiKhoan = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  thongTinDangKy = (thongTinDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
