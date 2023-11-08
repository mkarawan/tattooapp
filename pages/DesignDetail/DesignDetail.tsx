import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./DesignDetail.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Header from "../../components/Header/Header.tsx";

const DesignDetail: React.FC = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <>
      <Header />

      <BackButton />
      <div className="favourites" onClick={() => setIsFavourite(!isFavourite)}>
        <p className={isFavourite ? "pink" : "grey"}>Ulubione️</p>
        {!isFavourite && (
          <IconContext.Provider
            value={{
              size: "18px",
              color: "var(--grey-text-color)",
            }}
          >
            <div>
              <BsHeart />
            </div>
          </IconContext.Provider>
        )}
        {isFavourite && (
          <IconContext.Provider
            value={{
              size: "18px",
              color: "var(--pink-text-color",
            }}
          >
            <div>
              <BsHeartFill />
            </div>
          </IconContext.Provider>
        )}
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
      <div className="info">
        <div className="info-line">
          <p className="uppercase-small">Miejsce</p>
          <p className="uppercase-small">wszystkie</p>
        </div>
        <div className="info-line">
          <p className="uppercase-small">kolor</p>
          <p className="uppercase-small">czarny</p>
        </div>
        <div className="info-line">
          <p className="uppercase-small">rozmiar</p>
          <p className="uppercase-small">od 15cm</p>
        </div>
        <div className="info-line">
          <p className="uppercase-small">autor</p>
          <p className="uppercase-small">Ania</p>
        </div>
      </div>
    </>
  );
};

export default DesignDetail;
