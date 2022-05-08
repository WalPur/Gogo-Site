import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./pages/home";
import Header from "./components/header/Header";
import Courier from "./pages/courier";
import Partner from "./pages/partner";

import './app.css'
import './museo_sans.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/partner" element={<Partner/>}></Route>
          <Route path="/courier" element={<Courier/>}></Route>
          <Route path="/docs" element></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
