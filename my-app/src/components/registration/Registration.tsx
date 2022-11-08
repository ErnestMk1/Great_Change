import css from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={css.main_div}>
      <h1>РЕЄСТРАЦІЯ <br></br>НА ГУМ. ДОПОМОГУ</h1>

      <div className={css.text_block}>
        <label>ПІБ</label>
        <input
          type="text"
          className={css.text_input}
          placeholder="ex. Бандера Степан Андрійович"
        />
      </div>

      <div className={css.text_block}>
        <label>Адреса проживання до 24 лютого</label>
        <input
          type="text"
          className={css.text_input}
          placeholder="місто/вулиця/номер будинку"
        />
      </div>

      <div className={css.text_block}>
        <label>Серія, номер паспорту</label>
        <input
          type="text"
          className={css.text_input}
          placeholder="0101010011010101010"
        />
      </div>

      <div className={css.text_block}>
        <label>Адреса проживання на сьогодні</label>
        <input
          type="text"
          className={css.text_input}
          placeholder="місто/вулиця/номер будинку"
        />
      </div>

      <div className={css.checkbox_block}>
        <input
          type="checkbox"
          name="agreement"
          id="toggler"
          className={css.checkbox_input}
        />
        <label>Даю згоду на обробку персональних даних</label>
      </div>

      <button className={css.registration_button}>ЗАРЕЄСТРУВАТИСЯ</button>
    </div>
  );
};

export default Registration;
