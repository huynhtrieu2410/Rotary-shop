
import './App.css';

import Header from './components/Index/Header/Header';
import ControlledCarousel from './components/Index/Carousel/ControlledCarousel';
import Brand from './components/Index/Brand/Brand';
import TopProducts from './components/Index/TopProducts/TopProducts';
import HotwheelsBr from './components/Index/Brand/HotwheelsBr';
import TomicaBr from './components/Index/Brand/TomicaBr';
import MiniGTBr from './components/Index/Brand/MiniGTBr';
import TarmacBr from './components/Index/Brand/TarmacBr';

import HotwheelsBrand from './components/Brands/Hotwheels/HotwheelsBrands';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <ControlledCarousel/>
      <Brand/>
      <TopProducts/>
      <HotwheelsBr/>
      <TomicaBr/>
      <MiniGTBr/>
      <TarmacBr/> */}

      <HotwheelsBrand/>

    </div>
  );
}

export default App;
