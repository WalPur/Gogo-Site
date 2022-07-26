import './app.css'
import './museo_sans.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {
  Header
} from './components';

import {
  Courier,
  Home,
} from './pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/courier' element={<Courier/>}></Route>
          <Route path='' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
