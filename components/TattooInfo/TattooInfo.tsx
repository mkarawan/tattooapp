import React from "react";
import "./TattooInfo.css";

const TattooInfo: React.FC = () => {
  return (
    <>
      <p className="tattoo-info-title">Miejsce</p>
      <input type="text" className="input" placeholder="Wpisz miejsce" />
      <p className="tattoo-info-title">Kolor</p>
      <div className="checkboxes">
        <label className="checkbox">
          <input type="checkbox" />
          Czarny
          <div className="new-checkbox"></div>
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          Kolor
          <div className="new-checkbox"></div>
        </label>
      </div>

      <p className="tattoo-info-title">Rozmiar</p>
      <div className="checkboxes">
        <label className="checkbox">
          <input type="checkbox" />
          10-15cm
          <div className="new-checkbox"></div>
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          15-20cm
          <div className="new-checkbox"></div>
        </label>
      </div>
      <textarea
        className="input textarea"
        placeholder="Wiadomość dla artysty"
      />
    </>
  );
};

export default TattooInfo;
