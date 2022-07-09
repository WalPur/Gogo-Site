import Components from '../components/index'

function Home() {
  Components.Title("Главная");
  return (
    <div className="wrapper">
      <Components.General />
      <div className="Home container-md">
        <Components.About />
        <Components.Slider />
        <Components.Subscribe />
        <Components.Equipment />
        <Components.Info />
      </div>
      <Components.Modal />
      <Components.Footer />
    </div>
  );
}

export default Home;