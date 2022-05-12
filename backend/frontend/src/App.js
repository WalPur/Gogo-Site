import './app.css'
import './museo_sans.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Courier from "./pages/courier";
import Docs from "./pages/docs";
import Header from "./components/header/Header";
import Home from "./pages/home";
import Partner from "./pages/partner";
import Recieved from "./pages/recieved";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/recieved/:id" element={<Recieved/>}></Route>
          <Route path="/partner" element={<Partner/>}></Route>
          <Route path="/courier" element={<Courier/>}></Route>
          <Route path="/docs" element={<Docs/>}></Route>
          <Route path='' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
