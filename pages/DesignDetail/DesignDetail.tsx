import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./DesignDetail.css";
import { IconContext } from "react-icons";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const DesignDetail: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="favourites">
        <p>Ulubione️</p>
        <IconContext.Provider
          value={{ size: "25px", color: "var(--grey-text-color)" }}
        >
          <div>
            <CiHeart />
          </div>
        </IconContext.Provider>
      </div>
      <img src={"tattoo1.jpg"} alt={"tattoo-design"} />
      <div className="padding">
        <div className={"first-line"}>
          <h1 className="title-text">Nazwa wzoru</h1>
          <p className="price">od 500 zł</p>
        </div>
        <div className=" artist-date design-date">
          <p>Najbliższy termin</p>
          <p>3 grudnia</p>
        </div>
        <Link to="/bookDesign">
          <button className="gradientBtn book-btn">Umów się</button>
        </Link>
      </div>
      <div className="tattoo-info">
        <div className="tattoo-info-line">
          <p>Miejsce</p>
          <p>wszystkie</p>
        </div>
        <div className="tattoo-info-line">
          <p>kolor</p>
          <p>czarny</p>
        </div>
        <div className="tattoo-info-line">
          <p>rozmiar</p>
          <p>od 15cm</p>
        </div>
      </div>
    </>
  );
};

export default DesignDetail;
