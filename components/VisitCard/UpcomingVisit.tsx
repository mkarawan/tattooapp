import React from "react";
import "./VisitCard.css";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const UpcomingVisit: React.FC = () => {
  return (
    <>
      <div className="opinion-card">
        <div className="opinion-user visit-data">
          <img src="artist1.jpg" alt="user-avatar" />
          <div className="opinion-user-data ">
            <p className="uppercase-small">User1</p>
            <p className="design-name">Nazwa wzoru</p>
          </div>
          <div className="visit-date">
            <p>14.12.2023</p>
            <p>11:00</p>
          </div>
        </div>
        <div className="visit-details">
          <div className="visit-buttons">
            <button className="gradientBtn visit-btn">
              Zmień termin <FaRegCalendar />
            </button>
            <button className="gradientBtn red-btn visit-btn">
              Anuluj wizytę
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingVisit;
