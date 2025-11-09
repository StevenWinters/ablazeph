import { FaPlay } from "react-icons/fa";

interface Props {
  inverted?: boolean;
  isWhite?: boolean;
}

const PlayButton = ({ inverted = false, isWhite }: Props) => {
  return (
    <button
      className={`btn btn--circle ${inverted && "btn--inverted"} ${
        isWhite && "white"
      }`}
    >
      <FaPlay className="play__button" />
    </button>
  );
};

export default PlayButton;
