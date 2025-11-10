import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <section className="modal">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14157.620402230936!2d120.96657643473151!3d14.670197178551284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b43c1fd0fe55%3A0xc19633e7c54d6740!2sAblaze%20for%20Jesus%20Family%20Church!5e0!3m2!1sen!2sph!4v1762747769138!5m2!1sen!2sph"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="grid grid--1x2 modal__content">
        <div className="modal__container">
          <header>
            <h3 className="modal__heading">Visit Us.</h3>
          </header>
          <span className="modal__destination">
            2F MGC Veranda, Tinajeros Malabon City
          </span>
          <Link
            to="/contact"
            className="flex align--center gap--md modal__link"
          >
            Learn More
            <FaArrowRightLong />
          </Link>
        </div>
        <div>
          <div className="modal__chunk">
            <header>
              <h3>Email Us.</h3>
              <p className="modal__email">inquiries@ablazefamilychurch.org</p>
            </header>
          </div>
          <div className="modal__chunk">
            <header>
              <h3>Connect with Us.</h3>
            </header>
            <div className="flex gap--lg modal__icons">
              <Link to="">
                <FaFacebook />
              </Link>
              <Link to="">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
