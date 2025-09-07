import About from "../Commponents/About";
import Contuct from "../Commponents/Contuct";
import Nav from "../Commponents/Nav";
import Serveces from "../Commponents/Serveces";
import Slider from "../Commponents/Slider";
import Swiper from "../Commponents/Swiper";

export default function Home(){
    return(
        <div>
            <Nav/>
            <Slider/>
            <About/>
            <Swiper/>
            <Serveces/>
            <Swiper/>
            <Contuct/>
        </div>
    )
}