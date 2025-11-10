import Img from "./Img";
import Cheer from "../assets/cheer.jpg";

const GiveHero = () => {
  return (
    <section className="block give">
      <div className="grid grid--1x2 container">
        <Img src={Cheer} className="give__image" />
        <div className="block">
          <header className="give__board">
            <h1 className="give__heading">Love Offering</h1>
          </header>
          <div className="grid grid--1x2 give__gcash give__card">
            <header className="give__header gcash">
              <h3>Gcash</h3>
            </header>
            <div className="give__content">
              <span className="give__section">Contact No</span>
              <span className="give__detail">+63 123-456-789</span>
            </div>
          </div>
          <div className="give__bank give__card">
            <header className="give__header bank">
              <h3>Bank Transfer</h3>
            </header>
            <div className="grid grid--1x2 give__container">
              <ul className="give__lists">
                <li className="give__list">Metrobank</li>
                <li className="give__list">BDO</li>
                <li className="give__list">BPI</li>
              </ul>
              <div className="give__content">
                <div className="give__box">
                  <span className="give__section">Account Number</span>
                  <span className="give__detail">123456789</span>
                </div>
                <div className="give__box">
                  <span className="give__section">Account Name</span>
                  <span className="give__detail">ABLAZE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveHero;
