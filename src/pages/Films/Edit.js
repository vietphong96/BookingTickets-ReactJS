import React, { useState, useEffect } from "react";
import moment from "moment";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { GROUPID } from "../../utils/settings/config";
import { useDispatch, useSelector } from "react-redux";
import { capNhatPhimUpLoadAction } from "../../redux/actions/GetListFilmAction";
import LayThongTinPhimAction from "../../redux/actions/LayThongTinPhimAction";
const Edit = (props) => {
  const { thongTinPhim } = useSelector((state) => state.ThongTinPhimReducer);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const [srcImg, setSrcImg] = useState("");

  //lay thong tin phim edit

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(LayThongTinPhimAction(id));
    console.log(id);
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      maNhom: GROUPID,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("formData", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      //Cập nhật phim upload hình
      dispatch(capNhatPhimUpLoadAction(formData));
    },
  });

  const handleChangeDatePicker = (values) => {
    let ngayKhoiChieu = moment(values);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    await formik.setFieldValue("hinhAnh", file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setSrcImg(e.target.result);
    };
  };
  return (
    <div>
      <div>
        <div className="text-4xl mb-20">Chỉnh sửa nội dung phim</div>
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
            <Input
              name="tenPhim"
              onChange={formik.handleChange}
              value={formik.values.tenPhim}
            />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input
              name="trailer"
              onChange={formik.handleChange}
              value={formik.values.trailer}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input
              name="moTa"
              onChange={formik.handleChange}
              value={formik.values.moTa}
            />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format="DD/MM/YYYY"
              onChange={handleChangeDatePicker}
              defaultValue={moment(formik.values.ngayKhoiChieu)}
            />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch
              onChange={handleChangeSwitch("dangChieu")}
              checked={formik.values.dangChieu}
            />
          </Form.Item>
          <Form.Item label="Sắp chiếu" valuePropName="checked">
            <Switch
              onChange={handleChangeSwitch("sapChieu")}
              checked={formik.values.sapChieu}
            />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch
              onChange={handleChangeSwitch("hot")}
              checked={formik.values.hot}
            />
          </Form.Item>
          <Form.Item label="Số sao">
            <InputNumber
              onChange={handleChangeSwitch("danhGia")}
              min={1}
              max={10}
              value={formik.values.danhGia}
            />
          </Form.Item>
          <Form.Item label="Hình Ảnh">
            <input type="file" onChange={handleChangeFile} />
            <img
              style={{ width: "150", height: "100px" }}
              src={srcImg === "" ? thongTinPhim.hinhAnh : srcImg}
              alt="hinhAnh"
            />
          </Form.Item>

          <Form.Item label="Cập Nhật">
            <button
              type="submit"
              className="bg-blue-300 text-white w-20 h-8 rounded-sm"
            >
              Cập nhật
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Edit;
