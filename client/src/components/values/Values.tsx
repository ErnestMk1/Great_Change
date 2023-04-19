import css from './Values.module.css';

const Values = () => {
  return (
    <div className={css.main_div}>
      <div className={css.background}></div>

      <div className={css.content_block}>
        <h1 className={css.values_caption}>ЦІННОСТІ ВЕЛИКОЇ ПЕРЕМІНИ:</h1>

        <ol className={css.listOfValues}>
          <li>1. БОГ І ЙОГО СЛОВО...</li>
          <li>2. ВЕЛИКА ПЕРЕМІНА У МЕНІ</li>
          <li>3. ВІДКРИТЕ СЕРЦЕ</li>
          <li>4. ЗМІСТ ВАЖЛИВІШИЙ ЗА ФОРМУ</li>
          <li>5. СІМ'Я</li>
        </ol>
      </div>
    </div>
  );
};

export default Values;
