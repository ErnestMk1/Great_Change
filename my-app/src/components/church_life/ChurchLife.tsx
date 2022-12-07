import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import bros from '../../imgs/bros.png';
import sisters from '../../imgs/sisters.png';
import youth from '../../imgs/youth.png';
import css from './Sliding.module.css';

const ChurchLife = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={css.main_div}>
      <h1 className={css.caption}>ЖИТТЯ ЦЕРКВИ</h1>

      <Slider {...settings}>
        <div className={css.slider_div}>
          <img
            src={bros}
            alt="brothers img"
            className={css.slider_img}
          />
        </div>
        <div className={css.slider_div}>
          <img
            src={sisters}
            alt="sisters img"
            className={css.slider_img}
          />
        </div>
        <div className={css.slider_div}>
          <img
            src={youth}
            alt="youth img"
            className={css.slider_img}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ChurchLife;
