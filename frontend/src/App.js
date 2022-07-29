import './app.css'
import './museo_sans.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {
  Header,
  Footer,
} from './components';

import {
  Courier,
  Partner,
  Home,
  Contact,
  About
} from './pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contacts' element={<Contact/>}></Route>
          <Route path='/partner' element={<Partner/>}></Route>
          <Route path='/courier' element={<Courier/>}></Route>
          <Route path='' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
