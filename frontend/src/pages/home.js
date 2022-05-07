import Slider from "../components/slider/Slider";
import General from "../components/general/General";
import About from "../components/about/About"


function Home() {
    return (
      <div className="Home container">
              <General/>
              <About />
              <Slider />
      </div>
    );
  }
  
  export default Home;
  