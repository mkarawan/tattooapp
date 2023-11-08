import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const hideOnLogin = location.pathname === "/login";
  const hideOnRegistration = location.pathname === "/registration";
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
      {!hideOnLogin && !hideOnRegistration && (
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
      )}
    </>
  );
};

export default Header;
