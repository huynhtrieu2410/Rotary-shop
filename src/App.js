
import './App.css';

import Header from './components/Index/Header/Header';
import ControlledCarousel from './components/Index/Carousel/ControlledCarousel';
import Brand from './components/Index/Brand/Brand';
import TopProducts from './components/Index/TopProducts/TopProducts';
import HotwheelsBrand from './components/Index/Brand/HotwheelsBrand';
import TomicaBrand from './components/Index/Brand/TomicaBrand';
import MiniGTBrand from './components/Index/Brand/MiniGTBrand';
import TarmacBrand from './components/Index/Brand/TarmacBrand';

function App() {
  return (
    <div className="App">
      <Header/>
      <ControlledCarousel/>
      <Brand/>
      <TopProducts/>
      <HotwheelsBrand/>
      <TomicaBrand/>
      <MiniGTBrand/>
      <TarmacBrand/>
      
    </div>
  );
}

export default App;
