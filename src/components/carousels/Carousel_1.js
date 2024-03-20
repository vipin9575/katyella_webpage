import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselData from "./CarouselData";
import Cards_1 from "../cards/Cards_1";

function Carousel_1() {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#ffffff",
          padding: "20px",
          borderRadius: "50%",
          color: "black",
        }}
        onClick={onClick}
      >
        Prev
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
        onClick={onClick}
      >
        Next
      </div>
    );
  }

  var settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    speed: 500,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
    <div className="slider-container1">
      <Slider {...settings}>
        {carouselData.map((d) => (
          <div className="flexCenter">
            <Cards_1
              imageUrl={d.imageUrl}
              name={d.name}
              content={d.content}
              sign={d.sign}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel_1;
