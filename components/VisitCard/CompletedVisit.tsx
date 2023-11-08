import React from "react";
import "./VisitCard.css";
import { BsFillChatTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CompletedVisit: React.FC = () => {
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
            <Link to="/leaveOpinion">
              <button className="gradientBtn visit-btn">
                Oceń wizytę <BsFillChatTextFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedVisit;
