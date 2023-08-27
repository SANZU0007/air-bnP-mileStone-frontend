import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
