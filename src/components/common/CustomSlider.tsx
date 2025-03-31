import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomSliderProps {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  children: ReactNode;
}

const CustomSlider = ({
  dots = true,
  infinite = true,
  speed = 500,
  slidesToShow = 5,
  slidesToScroll = 3,
  children,
}: CustomSliderProps) => {
  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile
        settings: {
          slidesToShow: 1, // Show only 3 slides on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* If movies is empty show a list of placeholders, else show the movies */}
      {children}
    </Slider>
  );
};

export default CustomSlider;
