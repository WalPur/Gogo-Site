import About from "../components/about/About"
import Equipment from "../components/equipment/Equipment"
import Footer from "../components/footer/Footer"
import General from "../components/general/General";
import Info from "../components/info/Info"
import ModalWindow from "../components/modal/Modal";
import Slider from "../components/slider/Slider";
import Subscribe from "../components/subscribe/Subscribe"
import Title from "../components/title/Title";

function Home() {
  Title("Главная");
  return (
    <div className="wrapper">
      <General />
      <div className="Home container-md">
        <About />
        <Slider />
        <Subscribe />
        <Equipment />
        <Info />
      </div>
      <ModalWindow />
      <Footer />
    </div>
  );
}

export default Home;