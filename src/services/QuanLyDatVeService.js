import { baseService } from "../services/baseService";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export class QuanLyDatVeService extends baseService {
  constructor() {
    super();
  }

  layThongTinDatVe = (maChieuPhim) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maChieuPhim}`
    );
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  };
}

export const quanLyDatVeService = new QuanLyDatVeService();
