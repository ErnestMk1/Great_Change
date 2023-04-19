import css from './Information.module.css';
import book from '../../imgs/book.svg';
import question_mark from '../../imgs/question_mark.svg';
import { useState } from 'react';
import './informationBlock.css';

const Information = () => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const [listClass, setListClass] = useState("list list_hidden");

  const onClickBtn = () => {
    if (!isReadMoreShown) {
      setListClass("list list_shown")
    } else {
      setListClass("list list_hidden")
    }

    setReadMoreShown(prevState => !prevState);
  };

  return (
    <div className={css.main_div}>
      <div className={`${css.wrapper} ${css.caption_div}`}>
        <h1 className={css.info_caption}>Інформація</h1>
      </div>

      <div className={css.wrapper}>
        <div className={`${css.info_block} ${css.questions_block}`}>
          <img src={question_mark} alt="question mark img" />
          <h2>Поставити запитання</h2>

          <button className={css.inf_button} onClick={onClickBtn}>ДОКЛАДНІШЕ</button>
        </div>

        <div className={css.info_block}>
          <img src={book} alt="book img" />
          <h2>У що ми віримо?</h2>

          <div className={listClass}>
            <h3 className="dogma_caption">Ми віримо:</h3>

            <ul className="dogma_list">
              <li className="dogma_list_element">1. Біблія – богонатхненне Боже Слово, непогрішна істина.</li><br></br>
              <li className="dogma_list_element">2. Бог єдиний, у трьох Іпостасях – Отець, Син, Святий Дух.</li><br></br>
              <li className="dogma_list_element">3. Ісус Христос – Єдинородний Син Божий, зачатий від Святого Духа, <br></br>народжений від діви Марії, був розіп'ятий і воскрес на третій день.</li>
            </ul>
          </div>

          <button className={css.inf_button} onClick={onClickBtn}>
            {isReadMoreShown ? "ПОКАЗАТИ МЕНЬШЕ" : "ДОКЛАДНІШЕ"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
