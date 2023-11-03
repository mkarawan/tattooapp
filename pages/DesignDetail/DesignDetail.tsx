import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./DesignDetail.css";
import TattooInfo from "../../components/TattooInfo/TattooInfo.tsx";

const DesignDetail: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="padding">
        <div className={"first-line"}>
          <h1 className="title-text">Nazwa wzoru</h1>
          <p className="price">od 500 zł</p>
        </div>
        <h1>TU KALENDARZ</h1>
        <button className="hour-btn">13:00</button>
        <button className="hour-btn">17:00</button>
        <TattooInfo />
        <button className="gradientBtn book-btn">Umów się</button>
      </div>
    </>
  );
};

export default DesignDetail;
