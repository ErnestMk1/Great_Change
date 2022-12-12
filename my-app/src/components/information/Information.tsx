import css from './Information.module.css';
import book from '../../imgs/book.svg';

const Information = () => {
  const onClickBtn = () => alert('Joe Mama');

  return (
    <div className={css.main_div}>
      <div className={`${css.wrapper} ${css.caption_div}`}><h2>Інформація</h2></div>

      <div className={css.wrapper}>
        <img src={book} alt="book img" />
        <h2>У що ми віримо?</h2>

        <button className={css.inf_button} onClick={onClickBtn}>ДОКЛАДНІШЕ</button>
      </div>
    </div>
  );
};

export default Information;
