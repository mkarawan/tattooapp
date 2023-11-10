import React from "react";
import "./NewDesign.css";
import BackButton from "../../components/BackButton/BackButton.tsx";

const NewDesign: React.FC = () => {
  return (
    <>
      <div className="padding new-design">
        <BackButton headerSection="Nowy wzór" />
        <p className="uppercase-small">Nazwa</p>
        <input type="text" placeholder="Wpisz nazwę" />
        <input type="file" />
        <p className="uppercase-small">Minimalna cena</p>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Wpisz cenę (zł)"
        />
        <p className="uppercase-small">Miejsce</p>
        <select name="spot" multiple>
          <option>Udo</option>
          <option>Łydka</option>
          <option>Piszczel</option>
          <option>Piszczel</option>
          <option>Plecy</option>
          <option>Dłoń</option>
          <option>Szyja</option>
          <option>Brzuch</option>
          <option>Przedramie (wewnętrzne)</option>
          <option>Przedramie (zewnętrzne)</option>
          <option></option>
        </select>

        <p className="uppercase-small">rozmiar</p>

        <select name="size" multiple>
          <option>Mniej niż 10cm</option>
          <option>10-15cm</option>
          <option>15-20cm</option>
          <option>20-30cm</option>
          <option>30 i więcej</option>

          <option></option>
        </select>
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
        <button className="gradientBtn book-btn">Dodaj</button>
      </div>
    </>
  );
};

export default NewDesign;
