import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import APAW1 from "../assets/events/all_out_praise_&_worship/apaw_1.jpg";
import events from "../data/events";
import Img from "./Img";

const upcoming = [APAW1, APAW1, APAW1, APAW1];

const EventGalleryPage = () => {
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
          <div className="flex gap--sm justify--center event-gallery__container">
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
                <Link
                  to={`/events/${event.slug}`}
                  className="event-gallery__link"
                >
                  <header className="flex align--center event-gallery__header container">
                    <h3>{event.name}</h3>
                    <GoArrowRight className="event-gallery__arrow" />
                  </header>
                </Link>
                <div className="flex gap--sm">
                  {event.images.slice(0, 4).map((image) => (
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
            ))}
          </>
        ))}
      </section>
    </>
  );
};

export default EventGalleryPage;
