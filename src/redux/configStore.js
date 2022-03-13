import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "../redux/reducers/QuanLyPhimReducer";
import { QuanLyRapChieuReducer } from "../redux/reducers/QuanLyRapChieuReducer";
import { ThongTinPhimReducer } from "../redux/reducers/ThongTinPhimReducer";
import { QuanLyDangNhapReducer } from "../redux/reducers/QuanLyDangNhapReducer";
import { QuanLyDatVeReducer } from "../redux/reducers/QuanLyDatVeReducer";
import { QuanLyTaiKhoanReducer } from "../redux/reducers/QuanLyTaiKhoanReducer";
import { LoadingReducer } from "../redux/reducers/LoadingReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapChieuReducer,
  ThongTinPhimReducer,
  QuanLyDangNhapReducer,
  QuanLyDatVeReducer,
  QuanLyTaiKhoanReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default rootReducer;
