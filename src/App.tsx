import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Designs from "../pages/Designs/Designs";
import DesignDetail from "../pages/DesignDetail/DesignDetail";
import Artists from "../pages/Artists/Artists";
import ArtistDetail from "../pages/AccountDetail/ArtistDetail";

function App() {
  return (
    <>
      <header>
        <IconContext.Provider value={{ size: "40px", color: "var(--red)" }}>
          <div>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
        {/*<Link to="/">*/}
        <img src={"logo1.png"} alt="Logo" />
        {/*</Link>*/}
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/designDetail" element={<DesignDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artistDetail" element={<ArtistDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
