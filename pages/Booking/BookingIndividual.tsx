import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./Booking.css";
import TattooInfo from "../../components/TattooInfo/TattooInfo.tsx";

const BookingIndividual: React.FC = () => {
  return (
    <>
      <BackButton headerSection="wzór indywidualny" />
      <div className="padding">
        <div className={"first-line"}></div>

        <TattooInfo />
        <h1>TU KALENDARZ</h1>
        <button className="hour-btn hour">13:00</button>
        <button className="hour-btn-chosen hour">17:00</button>
        <button className="gradientBtn book-btn">Umów się</button>
      </div>
    </>
  );
};

export default BookingIndividual;
