import { Route } from "react-router-dom";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { history } from "../../App";
import { Redirect } from "react-router-dom";
import Loading from "../../pages/Loading";
import { useSelector } from "react-redux";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
export const AdminTemPlate = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isLoanding } = useSelector((state) => state.LoadingReducer);
  const { Component, ...restProps } = props;
  const user = JSON.parse(localStorage.getItem(USER_LOGIN));
  if (!user) {
    return <Redirect to="/login" />;
  }

  // if (user.maLoaiNguoiDung !== "QuanTri") {
  //   alert("Bạn không có quyền truy cập trang web này ~~!");
  //   return <Redirect to="/home" />;
  // }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            {isLoanding ? <Loading /> : ""}
            <Layout>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/user">Films</NavLink>
                  </Menu.Item>

                  <SubMenu key="sub1" title="Films">
                    <Menu.ItemGroup key="g1">
                      <Menu.Item key="2">
                        <NavLink to="/admin/films/addnew">Add new</NavLink>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background">
                  <div className="flex justify-between">
                    <div className="text-white flex items-center">
                      <NavLink to="/home">HOME</NavLink>
                    </div>
                    <div className="flex items-center justify-end ">
                      <div>
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "100%",
                            marginRight: "5px",
                          }}
                          src="https://i.pravatar.cc/300"
                        />
                      </div>
                      <div className="text-white">{user.taiKhoan}</div>

                      <button
                        onClick={() => {
                          localStorage.removeItem(USER_LOGIN);
                          localStorage.removeItem(TOKEN);
                          history.push("/");
                          // window.location.reload();
                          // return <Redirect to="/" />;
                        }}
                        className="text-white ml-5"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: "100vh",
                  }}
                >
                  <Component {...propsRoute} />
                </Content>
              </Layout>
            </Layout>
          </div>
        );
      }}
    />
  );
};
