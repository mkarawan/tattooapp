import React from "react";
import "./OpinionCard.css";
import Stars from "../Stars/Stars";

const OpinionCard: React.FC = () => {
  return (
    <>
      <div className="opinion-card">
        <div className="opinion-user">
          <img src="artist1.jpg" alt="user-avatar" />
          <div className="opinion-user-data">
            <p className="uppercase-small">User1</p>
            <Stars />
          </div>
        </div>
        <p className="artist-description">Super klientka!</p>
      </div>
    </>
  );
};

export default OpinionCard;
