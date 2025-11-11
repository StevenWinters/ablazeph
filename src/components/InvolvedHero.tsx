import Button from "./Button";
import JC from "../assets/jc.jpg";
import Img from "./Img";
import { Link } from "react-router-dom";

const InvolvedHero = () => {
  return (
    <section className="block involved-hero">
      <div className="involved-hero__circle"></div>
      <div className="grid grid--1x2 gap--xlg align--center container involved-hero__container">
        <div>
          <header className="header involved-hero__header">
            <h1>Serve With Us.</h1>
          </header>
          <div className="flex flex--column gap--md hero__btns involved-hero__btns">
            <Link to="/what-we-do" className="hero__btn">
              <Button color="accent">Learn More</Button>
            </Link>
            <Link to="" className="hero__btn">
              <Button color="special">Sign Up for a Discipleship Group</Button>
            </Link>
          </div>
        </div>
        <Img src={JC} className="involved-hero__image" />
      </div>
    </section>
  );
};

export default InvolvedHero;
