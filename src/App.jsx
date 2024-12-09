import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PopularTrips from "./Components/PopularTrips/PopularTrips";
import Nav from "./Components/Nav/Nav";
import Packages from "./Components/Packages/Packages";
import Destination from "./Components/Destination/Destination";
import Explore from "./Components/Explore/Explore";
import Booking from "./Components/Booking/Booking";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Nav />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/PopularTrips" element={<PopularTrips />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <PopularTrips />
        <Packages />
        <Footer />
        <Signup />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
