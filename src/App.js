
import './App.css';

import Header from './components/Index/Header/Header';
import ControlledCarousel from './components/Index/Carousel/ControlledCarousel';
import Brand from './components/Index/Brand/Brand';
import TopProducts from './components/Index/TopProducts/TopProducts';
import Hotwheels from './components/Products/Hotwheels/Hotwheels';

function App() {
  return (
    <div className="App">
      <Header/>
      <ControlledCarousel/>
      <Brand/>
      <TopProducts/>
      <Hotwheels/>
    </div>
  );
}

export default App;
