import React from "react";
import "./NavigationBar.css";
import { Link, useLocation } from "react-router-dom";
import {
  MdDesignServices,
  MdHomeFilled,
  MdInfo,
  MdPeople,
} from "react-icons/md";
import { IconContext } from "react-icons";

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const hideOnLogin = location.pathname === "/login";
  const hideOnRegistration = location.pathname === "/registration";
  const isArtists = location.pathname === "/artists";
  const isDesigns = location.pathname === "/designs";
  const isHome = location.pathname === "/";
  return (
    <>
      {!hideOnLogin && !hideOnRegistration && (
        <div
          className={`nav${isHome ? " home-selected" : ""}${
            isArtists ? " artists-selected" : ""
          }${isDesigns ? " designs-selected" : ""}`}
        >
          <Link to="/">
            <div className="nav-link">
              <IconContext.Provider
                value={{ size: "28px", color: "var(--pink-text-color" }}
              >
                <MdHomeFilled />
              </IconContext.Provider>

              <p>Główna</p>
            </div>
          </Link>

          <Link to="/designs">
            <div className="nav-link">
              <IconContext.Provider
                value={{ size: "28px", color: "var(--pink-text-color" }}
              >
                <MdDesignServices />
              </IconContext.Provider>

              <p>Wzory</p>
            </div>
          </Link>

          <Link to="/artists">
            <div className="nav-link">
              <IconContext.Provider
                value={{ size: "28px", color: "var(--pink-text-color" }}
              >
                <MdPeople />
              </IconContext.Provider>

              <p>Artyści</p>
            </div>
          </Link>

          <div className="nav-link">
            <IconContext.Provider
              value={{ size: "28px", color: "var(--pink-text-color" }}
            >
              <MdInfo />
            </IconContext.Provider>
            <p>O nas</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
