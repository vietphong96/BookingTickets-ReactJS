import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "../redux/reducers/QuanLyPhimReducer";
import { QuanLyRapChieuReducer } from "../redux/reducers/QuanLyRapChieuReducer";
import { ThongTinPhimReducer } from "../redux/reducers/ThongTinPhimReducer";
import { QuanLyDangNhapReducer } from "../redux/reducers/QuanLyDangNhapReducer";
import { QuanLyDatVeReducer } from "../redux/reducers/QuanLyDatVeReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapChieuReducer,
  ThongTinPhimReducer,
  QuanLyDangNhapReducer,
  QuanLyDatVeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default rootReducer;
