import { SET_CAROUSEL } from "../types/Carousel";

const stateDefault = {
  arrBanner: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      let newArrBanner = { ...stateDefault.arrBanner };
      newArrBanner = action.arrBanner;
      state.arrBanner = newArrBanner;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
