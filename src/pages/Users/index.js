import React, { Fragment } from "react";
import { Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../redux/actions/GetListFilmAction";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

export default function Admin() {
  const dispatch = useDispatch();
  const { arrDefault } = useSelector((state) => state.QuanLyPhimReducer);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const data = arrDefault;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: "5%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: "15%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (text, film) => {
        return (
          <Fragment>
            <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} />
          </Fragment>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "address",
      render: (text, film) => {
        return (
          <Fragment>
            <div>
              {film.moTa.length > 200
                ? film.moTa.slice(0, 200) + "..."
                : film.moTa}
            </div>
          </Fragment>
        );
      },
      width: "30%",
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "address",
      width: "10%",
      render: (text, film) => {
        return (
          <Fragment>
            <div>
              <button className="ml-5 mr-5">
                <NavLink to={`/admin/films/edit/${film.maPhim}`}>
                  <EditOutlined />
                </NavLink>
              </button>
              <button
                onClick={() => {
                  if (
                    window.confirm("Bạn có chắc muốn xoá phim " + film.tenPhim)
                  ) {
                    //Gọi action
                    dispatch(xoaPhimAction(film.maPhim));
                  }
                }}
              >
                <DeleteOutlined />
              </button>
            </div>
          </Fragment>
        );
      },
    },
  ];

  const onSearch = (value) => {
    console.log(value);
    // Gọi api layDanhSachPhim
    dispatch(layDanhSachPhimAction(value));
  };
  return (
    <div>
      <div className="text-4xl p-5">QUẢN LÝ PHIM ẢNH</div>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  );
}
