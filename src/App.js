import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logins from "./Form/Logins"
import Register from "./Form/Register";
import Bookings from "./Form/Booking"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Logins/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/books" element={<Bookings />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
