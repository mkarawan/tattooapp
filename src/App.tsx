import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Designs from "../pages/Designs/Designs";
import DesignDetail from "../pages/DesignDetail/DesignDetail";
import Artists from "../pages/Artists/Artists";
import ArtistDetail from "../pages/ArtistDetail/ArtistDetail";
import BookingDesign from "../pages/Booking/BookingDesign";
import BookingIndividual from "../pages/Booking/BookingIndividual";
import Account from "../pages/Account/Account";
import Favourites from "../pages/Favourites/Favourites";
import AccountDetail from "../pages/AccountDetail/AccountDetail";
import Visits from "../pages/Visits/Visits";
import LeaveOpinion from "../pages/LeaveOpinion/LeaveOpinion";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration.tsx";
import NavigationBar from "../components/NavigationBar/NavigationBar.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route path="/accountDetail" element={<AccountDetail />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/leaveOpinion" element={<LeaveOpinion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
