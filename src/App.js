import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import ControlledCarousel from './components/Carousel/ControlledCarousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <ControlledCarousel/>
    </div>
  );
}

export default App;
