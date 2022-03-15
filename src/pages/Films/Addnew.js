import React, { useState } from "react";
import moment from "moment";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { GROUPID } from "../../utils/settings/config";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "../../redux/actions/GetListFilmAction";
const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const [srcImg, setSrcImg] = useState("null");
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;
      // tao doi tuog form data =. dua gia tri len api

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("formData", values.hinhAnh, values.hinhAnh.name);
        }
      }
      //goi api
      dispatch(themPhimUploadHinhAction(formData));
    },
  });

  const handleChangeDatePicker = (values) => {
    console.log(moment(values).format("DD/MM/YYYY"));
    let ngayKhoiChieu = moment(values).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      console.log(e.target.result);
      formik.setFieldValue("hinhAnh", file);
      setSrcImg(e.target.result);
    };
  };
  return (
    <div>
      <div>
        <div className="text-4xl mb-20">Thêm phim mới</div>
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tên Phim">
            <Input name="tenPhim" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input name="moTa" onChange={formik.handleChange} />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleChangeDatePicker}
            />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("dangChieu")} />
          </Form.Item>
          <Form.Item label="Sắp chiếu" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("sapChieu")} />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("hot")} />
          </Form.Item>
          <Form.Item label="Số sao">
            <InputNumber
              onChange={handleChangeSwitch("danhGia")}
              min={1}
              max={10}
            />
          </Form.Item>
          <Form.Item label="Hình Ảnh">
            <input type="file" onChange={handleChangeFile} />
            <img
              style={{ width: "150", height: "70px" }}
              src={srcImg}
              alt="hinhAnh"
            />
          </Form.Item>
          <Form.Item label="Thêm Phim">
            <button
              type="submit"
              className="bg-blue-300 text-white w-20 h-8 rounded-sm"
            >
              Thêm Phim
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default FormSizeDemo;
