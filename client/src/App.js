import "./Reset.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
