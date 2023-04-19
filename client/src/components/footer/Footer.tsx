import css from './Footer.module.css';
import arrow from '../../imgs/arrow.svg';
import location from '../../imgs/location.svg';
import email from '../../imgs/email.svg';
import logo from '../../imgs/logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className={css.main_div} id="address">
      <div className={css.up_block}>
        <Link to="/#top">
          <img
            src={arrow}
            alt="arrow"
            className={css.arrow_img}
          />
        </Link>
      </div>

      <div className={css.info_block}>
        <a
          href="https://www.google.com/maps/place/Большая+Перемена/@45.3560039,28.8254637,17z/data=!3m1!4b1!4m5!3m4!1s0x40b76f1231737089:0x46c0dc020bed146f!8m2!3d45.3560691!4d28.825511"
          className={css.hyper_link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={location} alt="location" />
          <br className={css.string_breaker}></br>
          <p>пр. Миру 21</p>
        </a>
        <a
          href="mailto:izmailchurch@gmail.com"
          className={css.hyper_link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="email" />
          <br className={css.string_breaker}></br>
          <p>izmailchurch@gmail.com</p>
        </a>
      </div>

      <div className={css.logo_block}>
        <img
          src={logo}
          alt="logo"
          className={css.logo_img}
        />
      </div>
    </div>
  );
};

export default Footer;
