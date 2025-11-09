import { ReactNode } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";
import PlayButton from "./PlayButton";

interface Props {
  slidesPerView?: "auto" | 1;
  spaceBetween?: number;
  isBtnWhite?: boolean;
  children: ReactNode;
}

const Slider = ({
  children,
  slidesPerView = "auto",
  spaceBetween,
  isBtnWhite,
}: Props) => {
  return (
    <div className="slider__wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor
        navigation={{
          nextEl: ".slider__next",
          prevEl: ".slider__prev",
        }}
        loop
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        breakpoints={{
          0: { spaceBetween: 30 },
          768: { spaceBetween: 40 },
          1024: { spaceBetween: spaceBetween || 50 },
        }}
        className="slider"
      >
        {children}
      </Swiper>
      <div className="slider__prev">
        <PlayButton isWhite={isBtnWhite} />
      </div>
      <div className="slider__next">
        <PlayButton isWhite={isBtnWhite} />
      </div>
    </div>
  );
};

export default Slider;
