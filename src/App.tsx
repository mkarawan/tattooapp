import "./App.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IconContext } from "react-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Designs from "../pages/Designs/Designs";
import DesignDetail from "../pages/DesignDetail/DesignDetail";
import Artists from "../pages/Artists/Artists";
import ArtistDetail from "../pages/ArtistDetail/ArtistDetail";
import BookingDesign from "../pages/Booking/BookingDesign";
import BookingIndividual from "../pages/Booking/BookingIndividual";
import Header from "../components/Header/Header.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/designDetail" element={<DesignDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artistDetail" element={<ArtistDetail />} />
          <Route path="/bookDesign" element={<BookingDesign />} />
          <Route path="/bookIndividual" element={<BookingIndividual />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
