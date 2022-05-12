import About from "../components/about/About"
import Equipment from "../components/equipment/Equipment"
import Footer from "../components/footer/Footer"
import General from "../components/general/General";
import Info from "../components/info/Info"
import Slider from "../components/slider/Slider";
import Subscribe from "../components/subscribe/Subscribe"

function Home() {
    return (
      <div className="Home container">
        <General/>
        <About />
        <Slider />
        <Subscribe />
        <Equipment />
        <Info />
        <Footer />
      </div>
    );
  }
  
export default Home;
  