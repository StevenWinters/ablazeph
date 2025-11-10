import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { leftLinks, rightLinks } from "../data/links";

const Footer = () => {
  return (
    <footer>
      <div className="block container flex flex--column align--center footer__container">
        <div className="grid footer__grid top">
          <Logo />
          <div className="flex flex--wrap justify--center footer__icons">
            <Link to="/" className="footer__icon">
              <FaXTwitter />
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/ablazeforjesus"
              className="footer__icon"
            >
              <FaFacebookF />
            </Link>
            <Link to="/" className="footer__icon">
              <FaTiktok />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/ablazeforjesus_/"
              className="footer__icon"
            >
              <FaInstagram />
            </Link>
            <Link to="/" className="footer__icon">
              <SiGmail />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/@ablazeforJesus"
              className="footer__icon"
            >
              <FaYoutube />
            </Link>
            <Link
              target="_blank"
              to="https://www.google.com/maps/place/Ablaze+for+Jesus+Family+Church/@14.6701609,120.9678831,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b43c1fd0fe55:0xc19633e7c54d6740!8m2!3d14.6701609!4d120.970458!16s%2Fg%2F11fzwsrhj5?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
              className="footer__icon"
            >
              <SiGooglemaps />
            </Link>
          </div>
        </div>
        <div className="grid footer__grid bottom">
          {leftLinks.map((link) => (
            <section className="footer__section">
              <span className="footer__category">{link.name}</span>
              <ul className="footer__lists">
                {link.dropdown.map((d) => (
                  <li className="footer__list">
                    <NavLink to={d.path} className="footer__link">
                      {d.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="footer__section">
            <span className="footer__category">Miscellaneous</span>
            {rightLinks.map((link) => (
              <li className="footer__list">
                <NavLink to={link.path} className="footer__link">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </section>
        </div>
      </div>
      <div className="sub__footer">
        <div className="flex flex--column align--center container">
          <Link to="terms-and-conditions" className="footer__terms">
            Terms and Conditions
          </Link>
          <p className="footer__copyright">
            © 2025 Ablaze for Jesus Family Church. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
