import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(true);
    console.log("Otwieram");
  };
  const handleHideNavbar = () => {
    setShowNavbar(false);
    console.log("Zamykam");
  };

  return (
    <>
      <header className="padding">
        <IconContext.Provider value={{ size: "40px", color: "var(--red)" }}>
          <div onClick={handleShowNavbar}>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
        <Link to="/">
          <img src={"logo1.png"} alt="Logo" />
        </Link>
      </header>
      {showNavbar && <Navbar hideNavbar={handleHideNavbar} />}
    </>
  );
};

export default Header;
