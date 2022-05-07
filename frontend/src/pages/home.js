import Slider from "../components/slider/Slider";
import General from "../components/general/General";
import About from "../components/about/About"
import Subscribe from "../components/subscribe/Subscribe"


function Home() {
    return (
      <div className="Home container">
        <General/>
        <About />
        <Slider />
        <Subscribe />
      </div>
    );
  }
  
  export default Home;
  