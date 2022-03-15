import React from "react";
import { Tabs, Radio, Space } from "antd";
import { useState } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

function HomeMenu(props) {
  const [tabPosition, setTabPosition] = useState("left");
  console.log("hethongrachieuHOmemeun", props.heThongRapChieu);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  //render heThong

  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((Rap, index) => {
      return (
        <TabPane
          tab={<img src={Rap.logo} className="rounded-full" width="50" />}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {Rap.lstCumRap.slice(0, 5)?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ display: "flex" }}>
                      <img
                        src={cumRap.hinhAnh}
                        className="rounded-full"
                        width="50"
                      />
                      <div style={{ marginLeft: "5px", textAlign: "left" }}>
                        {cumRap.tenCumRap}
                        <br />
                        <button className="text-red-400">Chi Tiết</button>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* load phim */}
                  {cumRap.danhSachPhim.slice(5, 11)?.map((phim, index) => {
                    return (
                      <div>
                        <div
                          className="my-5 w-full"
                          style={{ display: "flex" }}
                        >
                          <img
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                            src={phim.hinhAnh}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                "https://picsum.photos/200/300?random=3";
                            }}
                          />
                          <div className="ml-3 text-blue-400 text-base flex flex-col justify-center">
                            {phim.tenPhim}
                            <div className="text-sm text-red-600">
                              {cumRap.diaChi}
                            </div>
                            <div className="flex">
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 6)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`checkout/${lichChieu.maLichChieu}`}
                                      className="mr-3  text-sm text-teal-700"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="w-full">
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </div>
  );
}

export default HomeMenu;
