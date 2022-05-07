import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./pages/home";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/partner" element></Route>
          <Route path="/courier" element></Route>
          <Route path="/docs" element></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
