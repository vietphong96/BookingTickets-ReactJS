import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";
function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required("Required")
        .matches(/[0-9a-zA-Z]{6,10}/, "Please enter a valid"),
      matKhau: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      soDt: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(dangKyAction(values));
    },
  });

  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
            <NavLink to="/home">Netflix</NavLink>
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Đăng Ký
        </h2>
        <div className="mt-12">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài Khoản
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                placeholder="mike123"
              />
              {formik.errors.taiKhoan && (
                <p className="errorMsg text-red-600">
                  {" "}
                  {formik.errors.taiKhoan}{" "}
                </p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật Khẩu
                </div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
                placeholder="userName123@"
              />
              {formik.errors.matKhau && (
                <p className="errorMsg text-red-600">
                  {" "}
                  {formik.errors.matKhau}{" "}
                </p>
              )}
            </div>

            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="user123@gmail.com"
              />
              {formik.errors.email && (
                <p className="errorMsg text-red-600"> {formik.errors.email} </p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Phone
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="soDt"
                value={formik.values.soDt}
                onChange={formik.handleChange}
                placeholder="0123456789"
              />
              {formik.errors.soDt && (
                <p className="errorMsg text-red-600"> {formik.errors.soDt} </p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                COD
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="maNhom"
                value={formik.values.maNhom}
                onChange={formik.handleChange}
                placeholder="user123"
              />
              {formik.errors.maNhom && (
                <p className="errorMsg text-red-600">
                  {" "}
                  {formik.errors.maNhom}{" "}
                </p>
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Họ tên
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                placeholder="userName"
              />
              {formik.errors.hoTen && (
                <p className="errorMsg text-red-600"> {formik.errors.hoTen} </p>
              )}
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
        shadow-lg"
              >
                Đăng Ký
              </button>
            </div>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn có tài khoản ?{" "}
            <a className="cursor-pointer text-indigo-600 hover:text-indigo-800 p-5">
              <NavLink to="/login">Đăng Nhập</NavLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
