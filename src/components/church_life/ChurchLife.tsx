import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import './church_life.css';
import bros from '../../imgs/bros.png';
import sisters from '../../imgs/sisters.png';
import youth from '../../imgs/youth.png';
import css from './ChurchLife.module.css';

type PropsType = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

const SampleNextArrow = (props: PropsType) => {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: PropsType) => {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
};

const ChurchLife = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={css.main_div} id="events">
      <div className={css.background}></div>

      <div className={css.content_block}>
        <h1 className={css.caption}>ЖИТТЯ ЦЕРКВИ</h1>

        <Slider {...settings}>
          <div className={css.slider_div}>
            <div>
              <img
                src={bros}
                alt="brothers img"
                className={css.slider_img}
              />
              <p>БРАТЕРСТВО</p>
            </div>
          </div>
          <div className={css.slider_div}>
            <div>
              <img
                src={sisters}
                alt="sisters img"
                className={css.slider_img}
              />
              <p>СЕСТРІВСТВО</p>
            </div>
          </div>
          <div className={css.slider_div}>
            <div>
              <img
                src={youth}
                alt="youth img"
                className={css.slider_img}
              />
              <p>МОЛОДЬ</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ChurchLife;
