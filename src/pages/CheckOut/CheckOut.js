import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVe,
  datVeAction,
  QuanLyDatVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import { DAT_GHE } from "../../redux/types/DatVe";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import "./Checkout.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;
function CheckOut(props) {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
  console.log("er", userLogin);
  const dispatch = useDispatch();
  const { chiTietPhongVe, danhsachDatGhe } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  console.log({ chiTietPhongVe });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  console.log({ thongTinPhim });
  console.log("ghe dang dat", danhsachDatGhe);
  useEffect(() => {
    const { id } = props.match.params;

    dispatch(QuanLyDatVeAction(id));
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

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
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

function callback(key) {
  console.log(key);
}

export default function (props) {
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
          <CheckOut {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
      ;
    </div>
  );
}
