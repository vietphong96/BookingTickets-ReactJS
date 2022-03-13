import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import "../Carousel/carousel.css";
import { getCarouselAction } from "../../../redux/actions/CarouselActions";

export default function HomeCarousel(props) {
  const { arrBanner } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction);
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };
  const renderImgBanner = () => {
    return arrBanner.map((item, index) => {
      return (
        <div className="w-full">
          <img
            className="w-full"
            key={index}
            style={{ height: "600px", objectFit: "cover" }}
            src={item.hinhAnh}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <Slider autoplay="true" {...settings}>
        {renderImgBanner()}
      </Slider>
    </div>
  );
}
