import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { getCarouselAction } from "../../../redux/actions/CarouselActions";

export default function HomeCarousel(props) {
  const { arrBanner } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction);
  }, []);

  const renderImgBanner = () => {
    return arrBanner.map((item, index) => {
      return (
        <div key={index}>
          <img
            className="w-full"
            style={{ height: "400px", objectFit: "cover" }}
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
        </div>
      );
    });
  };

  return <Carousel autoplay="true">{renderImgBanner()}</Carousel>;
}
