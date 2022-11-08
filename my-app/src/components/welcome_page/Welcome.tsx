import css from './Welcome.module.css';
import insta from '../../imgs/insta.svg';
import youtube from '../../imgs/youtube.svg';
import fbook from '../../imgs/fbook.svg';
import globe from '../../imgs/globe.svg';

const Welcome = () => {
  return (
    <div className={css.main_div}>
      <div className={css.label_block}>
        <p>GREATCHANGE.CHRUCH</p>
      </div>
      <div className={css.welcome_block}>
        <p>ЛАСКАВО ПРОСИМО</p>
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
          href="https://www.youtube.com/watch?v=H2MoWa7Akn0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={globe} alt="globe svg" />
        </a>
        <p className={css.footer_text}>Зібрання онлайн <br></br>кожної неділі о <strong>10:00</strong> і <strong>12:00</strong></p></div>
    </div>
  );
};

export default Welcome;
