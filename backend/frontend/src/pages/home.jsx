import Slider from "../components/slider/Slider";
import General from "../components/general/General";
import About from "../components/about/About"
import Subscribe from "../components/subscribe/Subscribe"
import Equipment from "../components/equipment/Equipment"
import Info from "../components/info/Info"
import Footer from "../components/footer/Footer"
// TODO: выставить формат файла jsx
function Home() {
    return (
      <div className="Home container"> {/* TODO: можно выставить пустой контейнер <></> вместо div*/}
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
  
  export default Home; // TODO: не нужен отступ
  