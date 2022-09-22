import Header from "../../Index/Header/Header"
import ControlledCarousel from "../../Index/Carousel/ControlledCarousel"
import BannerHotwheels from "./BannerHotwheels";
import SortItem from "./SortItem";
import Hotwheels from "../../Products/Hotwheels";
import Footer from "../../Index/Footer/Footer";

const HotwheelsBrand = () => {
    return(
        <div>
            <Header/>
            <BannerHotwheels/>
            <SortItem/>
            <Hotwheels/>
            <Footer/>
        </div>
    )
    
};

export default HotwheelsBrand;