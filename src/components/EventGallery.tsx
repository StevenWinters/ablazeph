import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import APAW1 from "../assets/events/all_out_praise_&_worship/apaw_1.jpg";
import APAW2 from "../assets/events/all_out_praise_&_worship/apaw_2.jpg";
import APAW3 from "../assets/events/all_out_praise_&_worship/apaw_3.jpg";
import APAW4 from "../assets/events/all_out_praise_&_worship/apaw_4.jpg";
import APAW5 from "../assets/events/all_out_praise_&_worship/apaw_5.jpg";
import APAW6 from "../assets/events/all_out_praise_&_worship/apaw_6.jpg";
import APAW7 from "../assets/events/all_out_praise_&_worship/apaw_7.jpg";
import APAW8 from "../assets/events/all_out_praise_&_worship/apaw_8.jpg";
import APAW9 from "../assets/events/all_out_praise_&_worship/apaw_9.jpg";
import APAW10 from "../assets/events/all_out_praise_&_worship/apaw_10.jpg";
import APAW11 from "../assets/events/all_out_praise_&_worship/apaw_11.jpg";
import APAW12 from "../assets/events/all_out_praise_&_worship/apaw_12.jpg";
import APAW13 from "../assets/events/all_out_praise_&_worship/apaw_13.jpg";
import APAW14 from "../assets/events/all_out_praise_&_worship/apaw_14.jpg";
import Relief1 from "../assets/events/relief_operations/relief_1.jpg";
import Relief2 from "../assets/events/relief_operations/relief_2.jpg";
import Relief3 from "../assets/events/relief_operations/relief_3.jpg";
import Relief4 from "../assets/events/relief_operations/relief_4.jpg";
import Relief5 from "../assets/events/relief_operations/relief_5.jpg";
import Relief6 from "../assets/events/relief_operations/relief_6.jpg";
import Relief7 from "../assets/events/relief_operations/relief_7.jpg";
import Relief8 from "../assets/events/relief_operations/relief_8.jpg";
import Relief9 from "../assets/events/relief_operations/relief_9.jpg";
import Relief10 from "../assets/events/relief_operations/relief_10.jpg";
import Relief11 from "../assets/events/relief_operations/relief_11.jpg";
import Relief12 from "../assets/events/relief_operations/relief_12.jpg";
import Relief13 from "../assets/events/relief_operations/relief_13.jpg";
import Relief14 from "../assets/events/relief_operations/relief_14.jpg";
import Relief15 from "../assets/events/relief_operations/relief_15.jpg";
import Relief16 from "../assets/events/relief_operations/relief_16.jpg";
import Relief17 from "../assets/events/relief_operations/relief_17.jpg";
import Relief18 from "../assets/events/relief_operations/relief_18.jpg";
import Relief19 from "../assets/events/relief_operations/relief_19.jpg";
import Relief20 from "../assets/events/relief_operations/relief_20.jpg";
import SF1 from "../assets/events/sportsfest/sf_1.jpg";
import SF2 from "../assets/events/sportsfest/sf_2.jpg";
import SF3 from "../assets/events/sportsfest/sf_3.jpg";
import SF4 from "../assets/events/sportsfest/sf_4.jpg";
import SF5 from "../assets/events/sportsfest/sf_5.jpg";
import SF6 from "../assets/events/sportsfest/sf_6.jpg";
import SF7 from "../assets/events/sportsfest/sf_7.jpg";
import SF8 from "../assets/events/sportsfest/sf_8.jpg";
import SF9 from "../assets/events/sportsfest/sf_9.jpg";
import SF10 from "../assets/events/sportsfest/sf_10.jpg";
import SF11 from "../assets/events/sportsfest/sf_11.jpg";
import SF12 from "../assets/events/sportsfest/sf_12.jpg";

import Img from "./Img";

const events = [
  {
    date: "2025",
    event: [
      {
        name: "APAW (All Out Praise & Worship)",
        images: [
          APAW1,
          APAW2,
          APAW3,
          APAW4,
          APAW5,
          APAW6,
          APAW7,
          APAW8,
          APAW9,
          APAW10,
          APAW11,
          APAW12,
          APAW13,
          APAW14,
        ],
      },
      {
        name: "Relief Operations",
        images: [
          Relief1,
          Relief2,
          Relief3,
          Relief4,
          Relief5,
          Relief6,
          Relief7,
          Relief8,
          Relief9,
          Relief10,
          Relief11,
          Relief12,
          Relief13,
          Relief14,
          Relief15,
          Relief16,
          Relief17,
          Relief18,
          Relief19,
          Relief20,
        ],
      },
      {
        name: "Sportsfest",
        images: [SF1, SF2, SF3, SF4, SF5, SF6, SF7, SF8, SF9, SF10, SF11, SF12],
      },
    ],
  },
  {
    date: "2024",
    event: [
      {
        name: "",
        images: [APAW1],
      },
    ],
  },
  {
    date: "2023",
    event: [
      {
        name: "",
        images: [APAW1],
      },
    ],
  },
];

const upcoming = [APAW1];

const EventGallery = () => {
  const [zoomedImage, setZoomedImage] = useState("");

  return (
    <>
      <div className="event-circle"></div>
      {zoomedImage && <div className="zoom__background"></div>}
      <section className="block event-gallery">
        <div className="container">
          <header className="event-gallery__header">
            <h1>Events</h1>
          </header>
        </div>
        <div className="container">
          <header>
            <h2 className="event-gallery__heading">Upcoming</h2>
            <span className="event__date"></span>
          </header>
          <div className="flex flex--wrap gap--md justify--center event-gallery__container">
            {upcoming.map((image) => (
              <figure
                className={`image__container ${
                  zoomedImage === image && "active"
                }`}
              >
                <span
                  className={`image__close ${
                    zoomedImage === image && "active"
                  }`}
                  onClick={() => setZoomedImage("")}
                >
                  <IoCloseOutline />
                </span>
                <div
                  className="flex justify--center align--center image__overlay"
                  onClick={() => setZoomedImage(image)}
                >
                  <div className="flex flex--column align--center overlay__content">
                    <h3>View</h3>
                  </div>
                </div>
                <Img src={image} className="event-gallery__image" />
              </figure>
            ))}
          </div>
        </div>
        {events.map((e) => (
          <>
            <header className="block container flex gap--md align--center">
              <h2 className="event-gallery__heading">
                {new Date().getFullYear().toString() === e.date
                  ? "Now"
                  : "Past"}
              </h2>
              <span className="event-gallery__date">{e.date}</span>
            </header>

            {e.event.map((event) => (
              <div>
                <header className="block container">
                  <h3>{event.name}</h3>
                </header>
                <div className="masonry gallery__grid event-gallery__grid">
                  <div>
                    {event.images.map((image) => (
                      <figure
                        className={`image__container ${
                          zoomedImage === image && "active"
                        }`}
                      >
                        <span
                          className={`image__close ${
                            zoomedImage === image && "active"
                          }`}
                          onClick={() => setZoomedImage("")}
                        >
                          <IoCloseOutline />
                        </span>
                        <div
                          className="flex justify--center align--center image__overlay"
                          onClick={() => setZoomedImage(image)}
                        >
                          <div className="flex flex--column align--center overlay__content">
                            <h3>View</h3>
                            <span className="overlay__date">{e.date}</span>
                          </div>
                        </div>
                        <Img src={image} className="event-gallery__image" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </section>
    </>
  );
};

export default EventGallery;
