
import './App.css';
import ChangeMode from './components/ChangeMode';
import Counter from './components/Counter';
import DayNight from './components/DayNight';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Faq/>
     <DayNight/>
     <ChangeMode/>
    </div>
  );
}

export default App;
