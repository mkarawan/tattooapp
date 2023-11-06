import React from "react";
import "./Account.css";
import Stars from "../../components/Stars/Stars";
import OpinionCard from "../../components/OpinionCard/OpinionCard";
import { Link } from "react-router-dom";

const Account: React.FC = () => {
  return (
    <>
      <div className="padding">
        <div className="user-data">
          <img src="user.jpg" alt="user-avatar" />
          <div>
            <Stars />
            <p className="opinions">39 opinii</p>
          </div>
        </div>
        <p className="uppercase user-name">Nazwa uzytkownika</p>
        <div className="card-row">
          <Link to="/favourites">
            <div className="card">
              <p className="title-text">ulubione</p>
            </div>
          </Link>

          <div className="card">
            <p className="title-text">
              da
              <br />
              ne
            </p>
          </div>
        </div>
        <div className="card">
          <p className="title-text">moje wizyty</p>
        </div>
        <p className="title-text">Opinie</p>
        <OpinionCard />
        <OpinionCard />
        <OpinionCard />
      </div>
    </>
  );
};

export default Account;
