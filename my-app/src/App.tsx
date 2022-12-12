import css from './App.module.css';
import ChurchLife from './components/church_life/ChurchLife';
import Donation from './components/donation/Donation';
import Footer from './components/footer/Footer';
import Information from './components/information/Information';
import Leaders from './components/leaders/Leaders';
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
      <ChurchLife />
      <Information />
      <Leaders />
      <Footer />
    </div>
  );
};

export default App;
