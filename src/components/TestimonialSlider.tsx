import { SwiperSlide } from "swiper/react";
import Testimonial1 from "../assets/testimonials/testimonial-1.mp4";
import Testimonial2 from "../assets/testimonials/testimonial-2.mp4";
import Testimonial3 from "../assets/testimonials/testimonial-3.mp4";
import Testimonial4 from "../assets/testimonials/testimonial-4.mp4";
import Slider from "./Slider";
import Button from "./Button";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

const videos = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

const TestimonialSlider = () => {
  const [videoSrc, setVideoSrc] = useState("");

  return (
    <section className="block container">
      <header className="testimonial-slider__header">
        <h1>Discover Our Stories.</h1>
        <p>
          Impact stories from outreach & being part of the Discipleship Group
          <br />
        </p>
      </header>
      {videoSrc && (
        <video src={videoSrc} controls className="testimonial__video"></video>
      )}
      <div className="testimonial-slider">
        <Slider>
          {videos.map((src) => (
            <SwiperSlide className="testimonial-slider__slide">
              <figure className="testimonial-slider__figure">
                <div className="flex justify--center align--center testimonial-slider__overlay">
                  <span>Watch</span>
                </div>
                <video
                  src={src}
                  className="testimonial-slider__video"
                  onClick={() => setVideoSrc(src)}
                ></video>
              </figure>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <Button
        className="flex align--center gap--md testimonial-slider__btn"
        color="youtube"
      >
        <FaYoutube size={20} />
        Watch Testimonials
      </Button>
    </section>
  );
};

export default TestimonialSlider;
