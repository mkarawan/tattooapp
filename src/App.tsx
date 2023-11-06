import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Designs from "../pages/Designs/Designs";
import DesignDetail from "../pages/DesignDetail/DesignDetail";
import Artists from "../pages/Artists/Artists";
import ArtistDetail from "../pages/ArtistDetail/ArtistDetail";
import BookingDesign from "../pages/Booking/BookingDesign";
import BookingIndividual from "../pages/Booking/BookingIndividual";
import Header from "../components/Header/Header";
import Account from "../pages/Account/Account";
import Favourites from "../pages/Favourites/Favourites";

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
          <Route path="/account" element={<Account />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
