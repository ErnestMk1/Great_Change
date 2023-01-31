import css from './Welcome.module.css';
import insta from '../../imgs/insta.svg';
import youtube from '../../imgs/youtube.svg';
import fbook from '../../imgs/fbook.svg';
import globe from '../../imgs/globe.svg';
import welcome_logo from '../../imgs/welcome_logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Welcome = () => {
  return (
    <div className={css.main_div} id='top'>
      <div className={css.nav_block}>
        <div className={`${css.firstHalf_list} ${css.list_div}`}>
          <div className={css.list_element}>
            <Link
              to="/#huma"
              className={css.list_element_link}
            >
              ДОПОМОГА
            </Link>
          </div>
          <div className={css.list_element}>
            <Link className={css.list_element_link} to="/#events">ПОДІЇ</Link>
          </div>
        </div>

        <div className={css.front_block}>
          <img
            src={welcome_logo}
            alt="Велика Переміна"
            className={css.welcome_logoIMG}
          />
          <p className={css.front_text}>GREATCHANGE.CHRUCH</p>
        </div>

        <div className={`${css.secondHalf_list} ${css.list_div}`}>
          <div className={css.list_element}>
            <Link className={css.list_element_link} to="/#donations">ПОЖЕРТВУВАННЯ</Link>
          </div>
          <div className={css.list_element}>
            <Link className={css.list_element_link} to="/#address">АДРЕСА</Link>
          </div>
        </div>
      </div>

      <div className={css.welcome_block}>
        <p className={css.welcome_text}>ЛАСКАВО ПРОСИМО</p>
        <div className={css.logo_link}>
          <a
            href="https://www.instagram.com/GREATCHANGE.CHURCH/"
            target="_BLANK"
            rel="noreferrer"
          >
            <img
              src={insta}
              alt="insta logo"
              className={css.btn}
            />
          </a>
          <a
            href="https://www.youtube.com/c/ЦерковьБольшаяПеремена"
            target="_BLANK"
            rel="noreferrer"
          >
            <img
              src={youtube}
              alt="youtube svg"
              className={css.btn}
            />
          </a>
          <a
            href="https://www.facebook.com/greatchange.church"
            target="_BLANK"
            rel="noreferrer"
          >
            <img
              src={fbook}
              alt="facebook svg"
              className={css.btn}
            />
          </a>
        </div>
      </div>
      <div className={css.info_block}>
        <a
          href="https://youtu.be/EkNynn4yTh0"
          target="_blank"
          rel="noreferrer"
          className={css.globe_link}
        >
          <img
            src={globe}
            alt="globe svg"
            className={css.globe_img}
          />
        </a>
        <p className={css.footer_text}>Зібрання <br className={css.string_breaker}></br>щонеділі о <strong>10:00</strong> і <strong>12:00</strong></p></div>
    </div>
  );
};

export default Welcome;
