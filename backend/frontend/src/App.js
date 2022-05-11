import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// TODO: отсортировать импорты

import Home from "./pages/home";
import Header from "./components/header/Header";
import Courier from "./pages/courier";
import Partner from "./pages/partner";
import Docs from "./pages/docs";

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
          <Route path="/docs" element={<Docs/>}></Route>
          <Route path='/' element={<Home/>}></Route>  {/* TODO: пустой путь просто '' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
