import { IoCloseOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import events from "../data/events";
import { useState } from "react";
import Img from "../components/Img";
import { GoArrowLeft } from "react-icons/go";

const EventsAPAWPage = () => {
  const [zoomedImage, setZoomedImage] = useState("");

  const { slug } = useParams();

  const year = events.find((e) => e.event.some((v) => v.slug === slug));
  const event = year?.event.find((v) => v.slug === slug);

  return (
    <>
      {zoomedImage && <div className="zoom__background"></div>}
      <header className="block container">
        <Link to="/events" className="event-gallery__arrow">
          <GoArrowLeft />
        </Link>
        <h3>{event?.name}</h3>
      </header>
      <div className="block masonry gallery__grid event-gallery__grid">
        <div>
          {event?.images.map((image) => (
            <figure
              className={`image__container ${
                zoomedImage === image && "active"
              }`}
            >
              <span
                className={`image__close ${zoomedImage === image && "active"}`}
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
                  <span className="overlay__date">{year?.date}</span>
                </div>
              </div>
              <Img src={image} className="event-gallery__image" />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsAPAWPage;
