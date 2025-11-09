import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import years from "../data/years";
import Button from "./Button";
import Img from "./Img";
import SearchBar from "./SearchBar";
import Group1 from "../assets/gallery/group_photos/group_1.jpg";
import Group2 from "../assets/gallery/group_photos/group_2.jpg";
import Group3 from "../assets/gallery/group_photos/group_3.jpg";
import Group4 from "../assets/gallery/group_photos/group_4.jpg";
import Group5 from "../assets/gallery/group_photos/group_5.jpg";
import Group6 from "../assets/gallery/group_photos/group_6.jpg";
import Group7 from "../assets/gallery/group_photos/group_7.jpg";
import Group8 from "../assets/gallery/group_photos/group_8.jpg";
import Group9 from "../assets/gallery/group_photos/group_9.jpg";
import Group10 from "../assets/gallery/group_photos/group_10.jpg";
import Group11 from "../assets/gallery/group_photos/group_11.jpg";
import Group12 from "../assets/gallery/group_photos/group_12.jpg";
import Group13 from "../assets/gallery/group_photos/group_13.jpg";
import Group14 from "../assets/gallery/group_photos/group_14.jpg";
import Group15 from "../assets/gallery/group_photos/group_15.jpg";
import Group16 from "../assets/gallery/group_photos/group_16.jpg";
import Group17 from "../assets/gallery/group_photos/group_17.jpg";
import Worship1 from "../assets/gallery/worship_photos/worship_1.jpg";
import Worship2 from "../assets/gallery/worship_photos/worship_2.jpg";
import Worship3 from "../assets/gallery/worship_photos/worship_3.jpg";
import Worship4 from "../assets/gallery/worship_photos/worship_4.jpg";
import Worship5 from "../assets/gallery/worship_photos/worship_5.jpg";
import Worship6 from "../assets/gallery/worship_photos/worship_6.jpg";
import Worship7 from "../assets/gallery/worship_photos/worship_7.jpg";
import Worship8 from "../assets/gallery/worship_photos/worship_8.jpg";
import Worship9 from "../assets/gallery/worship_photos/worship_9.jpg";
import Worship10 from "../assets/gallery/worship_photos/worship_10.jpg";
import Worship11 from "../assets/gallery/worship_photos/worship_11.jpg";
import Worship12 from "../assets/gallery/worship_photos/worship_12.jpg";
import Worship13 from "../assets/gallery/worship_photos/worship_13.jpg";
import Worship14 from "../assets/gallery/worship_photos/worship_14.jpg";
import Worship15 from "../assets/gallery/worship_photos/worship_15.jpg";
import Worship16 from "../assets/gallery/worship_photos/worship_16.jpg";
import Worship17 from "../assets/gallery/worship_photos/worship_17.jpg";

const gallery = [
  {
    date: "2025",
    images: [
      {
        src: Group1,
      },
      {
        src: Group2,
      },
      {
        src: Group3,
      },
      {
        src: Group4,
      },
      {
        src: Group5,
      },
      {
        src: Group6,
      },
      {
        src: Group7,
      },
      {
        src: Group8,
      },
      {
        src: Group9,
      },
      {
        src: Group10,
      },
      {
        src: Group11,
      },
      {
        src: Group12,
      },
      {
        src: Group13,
      },
      {
        src: Group14,
      },
      {
        src: Group15,
      },
      {
        src: Group16,
      },
      {
        src: Group17,
      },
      {
        src: Worship1,
      },
      {
        src: Worship2,
      },
      {
        src: Worship3,
      },
      {
        src: Worship4,
      },
      {
        src: Worship5,
      },
      {
        src: Worship6,
      },
      {
        src: Worship7,
      },
      {
        src: Worship8,
      },
      {
        src: Worship9,
      },
      {
        src: Worship10,
      },
      {
        src: Worship11,
      },
      {
        src: Worship12,
      },
      {
        src: Worship13,
      },
      {
        src: Worship14,
      },
      {
        src: Worship15,
      },
      {
        src: Worship16,
      },
      {
        src: Worship17,
      },
    ],
  },
  {
    date: "2024",
    images: [
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
    ],
  },
  {
    date: "2023",
    images: [
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
      {
        src: Group1,
      },
    ],
  },
];

interface Props {
  filteredText: string;
  searchText: string;
  onSearch: (value: string) => void;
  onSetFilter: (year: string) => void;
  onClearFilter: () => void;
}

const GalleryGrid = ({
  filteredText,
  searchText,
  onSearch,
  onSetFilter,
  onClearFilter,
}: Props) => {
  const [zoomedImage, setZoomedImage] = useState("");

  const searchedGallery = gallery.filter((g) => g.date.includes(searchText));
  const filteredGallery = searchedGallery.filter((g) =>
    g.date.includes(filteredText)
  );

  if (searchText) onClearFilter();

  return (
    <>
      {zoomedImage && <div className="zoom__background"></div>}
      <section>
        <div className="flex gap--md gallery__btns">
          {years.map((year) => (
            <Button
              className={`gallery__btn ${filteredText === year && "active"}`}
              onClick={() => onSetFilter(year)}
            >
              {year}
            </Button>
          ))}
        </div>
        <SearchBar
          searchText={searchText}
          onChange={(value) => onSearch(value)}
        />
        <span className="search__note">
          Note: Numbers only allowed (Example: 2025)
        </span>
        <div>
          {filteredGallery.map((g) => (
            <div className="gallery__container">
              <span className="gallery__date">{g.date}</span>
              <div className="masonry gallery__grid">
                {g.images.map((image) => (
                  <figure
                    className={`image__container ${
                      zoomedImage === image.src && "active"
                    }`}
                  >
                    <span
                      className={`image__close ${
                        zoomedImage === image.src && "active"
                      }`}
                      onClick={() => setZoomedImage("")}
                    >
                      <IoCloseOutline />
                    </span>
                    <div
                      className="flex justify--center align--center image__overlay"
                      onClick={() => setZoomedImage(image.src)}
                    >
                      <div className="flex flex--column align--center overlay__content">
                        <h3>View</h3>
                        <span className="overlay__date">{g.date}</span>
                      </div>
                    </div>
                    <Img src={image.src} />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryGrid;
