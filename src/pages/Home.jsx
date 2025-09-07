import About from "../Commponents/About";
import Blog from "../Commponents/Blog";
import Contuct from "../Commponents/Contuct";
import Footer from "../Commponents/Footer";
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
            <Blog/>
            <Contuct/>
            <Footer/>
        </div>
    )
}