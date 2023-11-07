import React from "react";
import "./LeaveOpinion.css";
import BackButton from "../../components/BackButton/BackButton.tsx";
import Stars from "../../components/Stars/Stars.tsx";

const LeaveOpinion: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="padding">
        <div className="opinion-user visit-data opinion-data">
          <img src="artist1.jpg" alt="user-avatar" />
          <div className="opinion-user-data ">
            <p className="uppercase-small">User1</p>
          </div>
          <div className="visit-date">
            <p>14.12.2023</p>
            <p>11:00</p>
          </div>
        </div>
        <div className="opinion">
          <Stars />
          <textarea
            placeholder="Wystaw opinię"
            className="input textarea opinion-area"
          ></textarea>
          <button className="gradientBtn visit-btn public-btn">
            Opublikuj
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaveOpinion;
