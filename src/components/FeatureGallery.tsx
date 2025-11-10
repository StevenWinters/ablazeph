import { useState } from "react";
import Button from "./Button";
import Img from "./Img";

interface Props {
  heading: string;
  description: string;
  images: string[];
}

const FeatureGallery = ({ heading, description, images }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (images.length == 1)
    return (
      <article className="grid grid--1x2 grid--center align--center feature-gallery">
        <div className="feature-gallery__content">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
        <div className="flex gap--sm">
          {images.map((src) => (
            <Img src={src} className="what-we-do__ministry-image" />
          ))}
        </div>
      </article>
    );

  return (
    <article className="feature-gallery">
      <div className="feature-gallery__content">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div
        className={`
          ${images.length >= 2 && "grid grid--1x2 grid--center gap--sm"}
          ${images.length >= 3 && "grid gap--sm grid--1x3"} 
          ${images.length > 3 && "feature-gallery__expandable"} 
          ${isExpanded && "active"}`}
      >
        {images.map((src) => (
          <Img src={src} className="what-we-do__ministry-image" />
        ))}
      </div>
      {images.length > 3 && (
        <Button onClick={() => setExpanded(!isExpanded)}>
          {!isExpanded ? `Show More ${heading} Images` : "Show Less"}
        </Button>
      )}
    </article>
  );
};

export default FeatureGallery;
