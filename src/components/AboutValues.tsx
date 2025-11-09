import { useState } from "react";
import FinalHeroImage from "../assets/final-hero.jpg";
import PastorJC from "../assets/jc.jpg";
import Button from "./Button";
import Img from "./Img";

type ValueType = (typeof values)[number];

const values = [
  {
    tag: "A",
    tagline: "Adore God",
    description: "We value worshipping God.",
    src: FinalHeroImage,
  },
  {
    tag: "B",
    tagline: "Believing His Word",
    description: "We value spiritual growth.",
    src: PastorJC,
  },
  {
    tag: "L",
    tagline: "Living Epistle",
    description:
      "We value fellowship and growing in faith together as believers.",
    src: FinalHeroImage,
  },
  {
    tag: "A",
    tagline: "Active Witnesses",
    description:
      "We value those who are far from God and are committed to reaching out with the hope and love of Jesus.",
    src: FinalHeroImage,
  },
  {
    tag: "Z",
    tagline: "Zealous Servants",
    description:
      "We value serving Jesus by humbly loving and serving one another.",
    src: FinalHeroImage,
  },
  {
    tag: "E",
    tagline: "Excited Examples",
    description: "We value reflecting Christ to the world through how we live.",
    src: FinalHeroImage,
  },
];

const AboutValues = () => {
  const [valuesObject, setValuesObject] = useState({
    tag: "A",
    tagline: "Adore God",
    description: "We value worshipping God.",
    src: FinalHeroImage,
  } as ValueType);

  return (
    <section>
      <div className="block container">
        <header className="header">
          <h2>Our Values</h2>
        </header>
      </div>
      <div className="block values__container">
        <Img src={valuesObject.src} className="value__image" />
        <div className="flex value__content">
          <div className="flex flex--column container">
            {values.map((value, i) => (
              <Button
                className={`value__btn ${
                  value.tagline == valuesObject.tagline && "active"
                }`}
                onClick={() => setValuesObject(values[i])}
              >
                {value.tag}
              </Button>
            ))}
          </div>
          <div className="value__description">
            <span className="value__tagline">
              <span className="value__tag">
                {valuesObject.tagline && valuesObject.tagline[0]}
              </span>
              <span>
                {valuesObject.tagline && valuesObject.tagline.slice(1)}
              </span>
            </span>
            <p>{valuesObject.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
