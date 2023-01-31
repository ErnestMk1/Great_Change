import React, { useState } from "react";
import css from "./Registration.module.css";
import axios from 'axios';

const Registration = () => {
  const [PIB, setPIB] = useState('');
  const [address_until, set_address_until] = useState('');
  const [passport_ser, set_passport_ser] = useState('');
  const [address_now, set_address_now] = useState('');
  const [agreement, setAgreement] = useState(false);

  const submitRegistration = () => {
    if (PIB !== '' &&
    address_until !== '' &&
    passport_ser !== '' &&
    address_now !== '' &&
    agreement) {
      axios.post('https://greatchange.herokuapp.com/api/insert', {
        PIB: PIB, address_until: address_until, passport_ser: passport_ser, address_now: address_now
      })

      setPIB('');
      set_address_until('');
      set_passport_ser('');
      set_address_now('');

      alert("Ваш запит успішно відправлений!)");
    } else if (PIB === '' &&
      address_until !== '' &&
      passport_ser !== '' &&
      address_now !== '' &&
      agreement) {
      alert('Вкажіть свої прізвище, імʼя та по-батькові');
    } else if (address_until === '' &&
      PIB !== '' &&
      passport_ser !== '' &&
      address_now !== '' &&
      agreement) {
      alert("Вкажіть свою адресу проживання до 24.02.2022");
    } else if (passport_ser === '' &&
      PIB !== '' &&
      address_until !== '' &&
      address_now !== '' &&
      agreement) {
      alert("Серія та номер паспорту не вказані...");
    } else if (address_now === '' &&
      PIB !== '' &&
      address_until !== '' &&
      passport_ser !== '' &&
      agreement) {
      alert('Поле "актуальна адреса проживання" незаповнене');
    } else if (!agreement &&
      PIB !== '' &&
      address_until !== '' &&
      passport_ser !== '') {
      alert('Ваша згода на обробку даних є обоʼязковою!');
    } else {
      alert('Всі поля мають бути заповненими!');
    }
  };

  return (
    <div className={css.main_div} id="huma">
      <div className={css.closed}>
        <p>Наразі <br className={css.string_breaker}></br>реєстрація недоступна</p>
      </div>

      <h1 className={css.registration_caption}>РЕЄСТРАЦІЯ <br className={css.string_breaker}></br>НА ГУМ. ДОПОМОГУ</h1>

      <div className={css.form_block}>
        <div className={css.text_block}>
          <label>ПІБ</label>
          <input
            type="text"
            className={css.text_input}
            placeholder="ex. Бандера Степан Андрійович"
            value={PIB}
            onChange={(e) => {
              setPIB(e.target.value);
            }}
          />
        </div>

        <div className={css.text_block}>
          <label>Адреса проживання до 24 лютого</label>
          <input
            type="text"
            className={css.text_input}
            placeholder="місто/вулиця/номер будинку"
            value={address_until}
            onChange={(e) => {
              set_address_until(e.target.value);
            }}
          />
        </div>

        <div className={css.text_block}>
          <label>Серія, номер паспорту</label>
          <input
            type="text"
            className={css.text_input}
            placeholder="0101010011010101010"
            value={passport_ser}
            onChange={(e) => {
              set_passport_ser(e.target.value);
            }}
          />
        </div>

        <div className={css.text_block}>
          <label>Адреса проживання на сьогодні</label>
          <input
            type="text"
            className={css.text_input}
            placeholder="місто/вулиця/номер будинку"
            value={address_now}
            onChange={(e) => {
              set_address_now(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={css.checkbox_block}>
        <input
          type="checkbox"
          name="agreement"
          id="toggler"
          className={css.checkbox_input}
          onChange={(e) => {
            if (e.target.checked) {
              setAgreement(true);
            } else {
              setAgreement(false);
            }
          }}
        />
        <label>Даю згоду на обробку персональних даних</label>
      </div>

      <button
        className={css.submit_button}
        onClick={submitRegistration}
      >
        ЗАРЕЄСТРУВАТИСЯ
      </button>
    </div>
  );
};

export default Registration;
