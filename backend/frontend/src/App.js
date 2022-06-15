import './app.css'
import './museo_sans.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Components from './components/index'
import Pages from './pages/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Components.Header />
        <Routes>
          <Route path="/recieved/:id" element={<Pages.Recieved/>}></Route>
          <Route path="/partner" element={<Pages.Partner/>}></Route>
          <Route path="/courier" element={<Pages.Courier/>}></Route>
          <Route path="/docs" element={<Pages.Docs/>}></Route>
          <Route path='' element={<Pages.Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
