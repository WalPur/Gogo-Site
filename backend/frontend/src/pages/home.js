import Slider from "../components/slider/Slider";
import General from "../components/general/General";
import About from "../components/about/About"
import Subscribe from "../components/subscribe/Subscribe"
import Equipment from "../components/equipment/Equipment"
import Info from "../components/info/Info"

function Home() {
    return (
      <div className="Home container">
        <General/>
        <About />
        <Slider />
        <Subscribe />
        <Equipment />
        <Info />
      </div>
    );
  }
  
  export default Home;
  