import css from './Leaders.module.css';
import Edward from '../../imgs/edward.png';
import Anatoliy from '../../imgs/anatoliy.png';

const Leaders = () => {
  return (
    <div className={css.main_div}>
      <div className={css.background}></div>

      <div className={css.content_block}>
        <div className={css.caption_block}>
          <h1>ЛІДЕРИ <br className={css.string_breaker}></br>ЦЕРКВИ</h1>
        </div>

        <div className={css.pastors_block}>
          <div className={css.pastor}>
            <img src={Edward} alt="Edward" />
            <h4>Едуард<br></br>Мирмир</h4>
            <p>Пастор</p>
          </div>

          <div className={css.pastor}>
            <img src={Anatoliy} alt="Anatoliy" />
            <h4>Анатолій<br></br>Мірчев</h4>
            <p>Пастор</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
