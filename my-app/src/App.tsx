import css from './App.module.css';
import Welcome from './components/welcome_page/Welcome';

const App = () => {
  return (
    <div className={css.main_div}>
      <Welcome />
    </div>
  );
};

export default App;
