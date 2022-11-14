import css from './App.module.css';
import Donation from './components/donation/Donation';
import Registration from './components/registration/Registration';
import Values from './components/values/Values';
import Welcome from './components/welcome_page/Welcome';

const App = () => {
  return (
    <div className={css.main_div}>
      <Welcome />
      <Registration />
      <Values />
      <Donation />
    </div>
  );
};

export default App;
