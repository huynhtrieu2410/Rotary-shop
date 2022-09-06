
import './App.css';

import Header from './components/Header/Header';
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import Brand from './components/Brand/Brand';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <ControlledCarousel/>
      {/* <Brand/> */}
      
    </div>
  );
}

export default App;
