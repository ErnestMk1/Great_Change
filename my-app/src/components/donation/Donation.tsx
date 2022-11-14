import css from './Donation.module.css';
import donation from '../../imgs/donation.svg';

const Donation = () => {
  return (
    <div className={css.main_div}>
      <h1 className={css.donation_caption}>ПОЖЕРТУВАННЯ</h1>

      <img src={donation} alt="don svg" />
      <p>Реквізити, для переводу пожертов через банк:</p>
      <button className={css.submit_button} type="submit">ДІЗНАТИСЯ</button>
    </div>
  );
};

export default Donation;
