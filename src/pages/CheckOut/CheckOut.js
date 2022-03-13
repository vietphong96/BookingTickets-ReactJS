import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  datVe,
  datVeAction,
  QuanLyDatVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import { CHUYEN_TAB_HANDLE, DAT_GHE } from "../../redux/types/DatVe";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import "./Checkout.css";
import { Tabs } from "antd";
import { thongTinTaiKhoanAction } from "../../redux/actions/QuanLyNguoiDungAction";
import Loading from "../Loading";
import { USER_LOGIN } from "../../utils/settings/config";
import { history } from "../../App";

const { TabPane } = Tabs;
function CheckOut(props) {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));

  const dispatch = useDispatch();
  const { chiTietPhongVe, danhsachDatGhe } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(QuanLyDatVeAction(id));
    dispatch(thongTinTaiKhoanAction());
  }, []);

  const renderGhe = () => {
    return danhSachGhe?.slice(0, 156)?.map((ghe, index) => {
      let dangDat = "";
      let id = danhsachDatGhe?.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (id !== -1) {
        dangDat = "dangDat";
      }
      let daDat = "";
      if (ghe.daDat) {
        daDat = "daDat";
      }

      let gheDaDuocDat = "";

      if (userLogin?.taiKhoan === ghe.taiKhoanNguoiDat) {
        gheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <button
          disabled={ghe.daDat}
          onClick={() => {
            dispatch({
              type: DAT_GHE,
              ghe,
            });
          }}
          key={index}
          className={`${ghe.loaiGhe} mt-1 ${daDat} ${dangDat} ${gheDaDuocDat}`}
        >
          {ghe.daDat ? "X" : ghe.tenGhe}
        </button>
      );
    });
  };

  const renderGheDangDat = () => {
    return danhsachDatGhe?.map((ghedat, index) => {
      console.log(typeof ghedat.giaVe);
      return (
        <div style={{ display: "inline-block" }} className="ml-1" key={index}>
          {ghedat.tenGhe}
        </div>
      );
    });
  };

  const toTalCost = () => {
    let sum = 0;
    danhsachDatGhe.map((ghe) => {
      sum += ghe.giaVe;
    });
    return sum;
  };

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-12">
        <div className="col-span-8 p-20">
          <div
            style={{
              borderBottom: " 30px solid #c4c4c4",
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              height: "5px",
              width: "800px",
              margin: "0  auto",
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "25px",
            }}
          >
            MÀN HÌNH
          </div>

          <div className="danhSachGhe grid grid-cols-12 mt-10">
            {renderGhe()}
          </div>

          <div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
                className="Thuong mt-10 mr-2"
              >
                STT
              </div>
              <span>Ghế thường</span>
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
                className="Vip mt-5 mr-2"
              >
                STT
              </div>
              <span>Ghế Vip</span>
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
                disabled={true}
                className="Thuong daDat mt-5 mr-2"
              >
                X
              </div>
              <span>Ghế thường đã được đặt </span>
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
                disabled={true}
                className="Vip daDat mt-5 mr-2"
              >
                X
              </div>
              <span>Ghế Vip đã được đặt </span>
            </div>
            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                lineHeight: "30px",
              }}
              className="Thuong gheDaDuocDat  mt-5 mr-2"
            >
              X
            </div>
            <span>Ghế bạn đã đặt </span>
          </div>
        </div>
        <div
          className="col-span-4 p-20"
          style={{ minHeight: "100vh", backgroundColor: "rgba(0,0,0,0.02)" }}
        >
          <div className="text-center text-4xl">
            {toTalCost().toLocaleString()} VND
          </div>
          <hr />
          <div className="text-green-700 text-lg">{thongTinPhim?.tenPhim}</div>
          <div>
            <span className="text-red-900">Địa điểm:</span>{" "}
            {thongTinPhim?.tenCumRap}
          </div>
          <div>
            <span className="text-red-900">Ngày Chiếu:</span>{" "}
            {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
            {thongTinPhim?.tepRap}
          </div>
          <hr />
          <div className="flex justify-between ">
            <div className="text-red-900">
              GHẾ:
              <div>{renderGheDangDat()}</div>
            </div>
            <div>{toTalCost().toLocaleString()} VND</div>
          </div>
          <div>
            {" "}
            <span className="text-red-900">Email: </span>
            {userLogin?.taiKhoan}
          </div>
          <div>
            {" "}
            <span className="text-red-900">Phone: </span>
            {userLogin?.soDT}
          </div>
          <hr />

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhsachDatGhe;
                console.log("thong tin dat ve", thongTinDatVe);
                dispatch(datVeAction(thongTinDatVe));
              }}
              className="text-blue-300 bg-black w-60 h-10 rounded-lg cursor-pointer"
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function (props) {
  //check user
  if (!localStorage.getItem(USER_LOGIN)) {
    history.push("/login");
  }
  // loading
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  const { tabDefault } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {isLoading ? <Loading /> : ""}
      <div className="p-20">
        <div className="p-5">
          <Tabs
            defaultActiveKey="1"
            activeKey={tabDefault}
            onChange={(key) => {
              dispatch({
                type: CHUYEN_TAB_HANDLE,
                number: key,
              });
            }}
          >
            <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
              <CheckOut {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
              <HistoryBooking {...props} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
// ten phim - gia - ngay dat -hinh danh - {maHeThongRap/tenRap/tenGhe}
function HistoryBooking(props) {
  // lay thong tin tai khoan

  const { thongTinTaiKhoan } = useSelector(
    (state) => state.QuanLyTaiKhoanReducer
  );
  const thongTinDatVe = thongTinTaiKhoan?.thongTinDatVe;
  console.log(
    "thong tin dat ve",
    thongTinDatVe
    // thongTinDatVe == undefined ? "" : thongTinDatVe[0].danhSachGhe
  );

  const renderKetQuaDatVe = () => {
    return thongTinDatVe.map((ve, index) => {
      const diaDiem = ve.danhSachGhe[0];
      const { tenHeThongRap, tenCumRap } = diaDiem;

      return (
        <tr key={index}>
          <td className="text-lg px-3 text-2xl font-medium dark:text-coolGray-400">
            {ve.tenPhim}
          </td>

          <td className="text-lg px-3 py-2">
            <span>{moment(ve.ngayDat).format("DD/MM/YYYY")}</span>
          </td>
          <td className="text-lg px-3 py-2">
            {tenHeThongRap} - {tenCumRap}
            <div className="flex">
              Ghế đã đặt:
              {ve.danhSachGhe.map((gheDat, index) => {
                return (
                  <div className="ml-2" key={index}>
                    {gheDat.tenGhe}
                  </div>
                );
              })}
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div style={{ minHeight: "100vh", maxWidth: "100vw" }}>
      <div className="container p-2 mx-auto sm:p-4 dark:text-coolGray-100">
        <h2 className="mb-4 text-4xl font-semibold leading-tight">
          Thông Tin Đặt Vé
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-coolGray-700">
                <th className="p-3 text-2xl">Tên Phim</th>
                <th className="p-3 text-2xl">Ngày Đặt</th>
                <th className="p-3 text-2xl">Địa Điểm</th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-coolGray-900 dark:border-coolGray-700">
              {renderKetQuaDatVe()}
            </tbody>

            {/**/}
          </table>
        </div>
      </div>
    </div>
  );
}
