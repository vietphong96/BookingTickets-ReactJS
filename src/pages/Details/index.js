import React, { useEffect } from "react";
import RatingCirCle from "../../components/RatingCircle/RatingCirCle";
import RatingStar from "../../components/RatingCircle/RatingStar";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Tabs } from "antd";
import LayThongTinPhimAction from "../../redux/actions/LayThongTinPhimAction";
import { NavLink } from "react-router-dom";
function Detail(props) {
  const { thongTinPhim } = useSelector((state) => state.ThongTinPhimReducer);
  const dispatch = useDispatch();
  console.log("ppopo0", thongTinPhim.danhGia);
  console.log({ thongTinPhim });
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(LayThongTinPhimAction(id));
    console.log(id);
  }, []);
  const renderRapPhim = () => {
    return thongTinPhim.heThongRapChieu?.map((rap, index) => {
      return (
        <TabPane
          tab={<img src={rap.logo} className="rounded-full" width="50" />}
          key={index}
        >
          <div>
            {rap.cumRapChieu?.map((rapChieu, index) => {
              return (
                <div className="flex" key={index}>
                  <div>
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src={rapChieu.hinhAnh}
                    />
                  </div>
                  <div
                    className="ml-2 flex"
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div className="font-bold">{rapChieu?.tenCumRap}</div>
                    <div className="font-thin text-xs">{rapChieu.diaChi}</div>

                    <div className="flex">
                      {rapChieu.lichChieuPhim?.map((time, index) => {
                        return (
                          <NavLink
                            to={`/checkout/${time.maLichChieu}`}
                            className="mr-4 text-red-400"
                            key={index}
                          >
                            {moment(time.ngayChieuGioChieu).format(
                              "DD/MM/YYYY"
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPane>
      );
    });
  };

  const { TabPane } = Tabs;
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          minHeight: "100vh",
          filter: "blur(8px)",
          backgroundImage: `url('${thongTinPhim.hinhAnh}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="flex">
          {/* hinh nanh */}
          <div>
            <img
              style={{ width: "300px", height: "400px", borderRadius: "25px" }}
              src={thongTinPhim.hinhAnh}
            />
          </div>
          {/* thong tin */}
          <div
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "25px",
              overflow: "auto",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "black",
            }}
            class="ml-2  rounded-2xl p-5"
          >
            <div className="text-lg text-yellow-400 font-bold">
              {thongTinPhim.tenPhim}
            </div>
            <div className="font-bold text-red-500">Mô tả</div>
            <div className="text-sm ">{thongTinPhim.moTa}</div>
          </div>
          {/* danh gia */}
          <div className="flex flex-col justify-center items-center ml-5">
            <RatingCirCle danhGia={thongTinPhim.danhGia} />
            <RatingStar danhGia={thongTinPhim.danhGia} />
          </div>
        </div>
        <div className="mt-2">
          <Tabs type="card">
            <TabPane tab="Lịch Chiếu" key="1">
              <Tabs tabPosition="left">{renderRapPhim()}</Tabs>
            </TabPane>
            <TabPane tab="Thông Tin" key="2">
              Thông Tin
            </TabPane>
            <TabPane tab="Đánh Giá" key="3">
              Đánh Giá
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Detail;
