import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
