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

/**
 * A customizable carousel/slider component built on React Slick.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} [props.dots=false] - Whether to show dot indicators.
 * @param {boolean} [props.infinite=false] - Enable infinite looping of slides.
 * @param {number} [props.speed=500] - Transition speed in milliseconds.
 * @param {number} [props.slidesToShow=5] - Number of slides visible at once.
 * @param {number} [props.slidesToScroll=3] - Number of slides to scroll at a time.
 * @param {React.ReactNode} props.children - Slide content (must be valid React elements).
 * @returns {React.ReactElement} A responsive carousel component.
 *
 * @example
 * <CustomSlider slidesToShow={4} slidesToScroll={2}>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 * </CustomSlider>
 */
const CustomSlider = ({
  dots = false,
  infinite = false,
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
