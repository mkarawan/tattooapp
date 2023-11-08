import React from "react";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // const [showNavbar, setShowNavbar] = useState<boolean>(false);

  // const handleShowNavbar = () => {
  //   setShowNavbar(true);
  //   console.log("Otwieram");
  // };
  // const handleHideNavbar = () => {
  //   setShowNavbar(false);
  //   console.log("Zamykam");
  // };

  return (
    <>
      <>
        <header className="padding">
          <Link to="/">
            <img src={"logo1.png"} alt="Logo" />
          </Link>
          <Link to="/account">
            <img className="user-avatar" src="artist1.jpg" alt="user-avatar" />
          </Link>

          {/*<IconContext.Provider value={{ size: "40px", color: "var(--red)" }}>*/}
          {/*  <div onClick={handleShowNavbar}>*/}
          {/*    <GiHamburgerMenu />*/}
          {/*  </div>*/}
          {/*</IconContext.Provider>*/}
        </header>
        {/*{showNavbar && <Navbar hideNavbar={handleHideNavbar} />}*/}
      </>
    </>
  );
};

export default Header;
