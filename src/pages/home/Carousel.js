import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MediaCard1 } from "./Card";
import Data from "./Data/Data";

function Carosel() {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
    speed: 500,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div className="flexCenter"></div> */}
        {Data.map((d) => (
          <div className="flexCenter">
            <MediaCard1
              imageUrl={d.imageUrl}
              name={d.name}
              content={d.content}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carosel;
