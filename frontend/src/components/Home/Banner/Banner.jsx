import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import gadgetSale from "../../../assets/images/Banners/gadget-sale.jpg";
import kitchenSale from "../../../assets/images/Banners/kitchen-sale.jpg";
import poco from "../../../assets/images/Banners/poco-m4-pro.webp";
import realme from "../../../assets/images/Banners/realme-9-pro.webp";
import fashionSale from "../../../assets/images/Banners/fashionsale.jpg";
import oppo from "../../../assets/images/Banners/oppo-reno7.webp";

// Custom Previous Button Component
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

// Custom Next Button Component
export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Banner = () => {
  // Slider settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  // Array of banner images and their corresponding links
  const banners = [
    { src: poco, link: "https://www.example.com/poco" },
    { src: realme, link: "https://www.example.com/realme" },
    { src: oppo, link: "https://www.example.com/oppo" },
  ];

  return (
    <>
      <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <a href={banner.link} rel="noopener noreferrer" key={index}>
              <img
                draggable="false"
                className="h-44 sm:h-72 w-full object-cover"
                src={banner.src}
                alt={`banner-${index}`}
              />
            </a>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
