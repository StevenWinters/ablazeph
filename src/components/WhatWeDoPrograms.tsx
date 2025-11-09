import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import Program from "../assets/program.png";
import PosterCard from "./PosterCard";

const programs = [
  {
    src: Program,
    heading: "Sunday Services",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Prayer Meeting",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Ministries",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },

  {
    src: Program,
    heading: "Sunday Services",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Prayer Meeting",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Ministries",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
];

const WhatWeDoPrograms = () => {
  return (
    <section className="what-we-do__programs">
      <div className="glow"></div>
      <div className="block what-we-do__background"></div>
      <div className="container what-we-do__container">
        <header className="header">
          <h1 className="what-we-do__heading">
            Gatherings. Programs. Ministries.
          </h1>
        </header>
        <Slider isBtnWhite={true}>
          {programs.map((program) => (
            <SwiperSlide>
              <PosterCard
                src={program.src}
                heading={program.heading}
                linkName={program.linkName}
                path={program.path}
              >
                {program.description}
              </PosterCard>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatWeDoPrograms;
