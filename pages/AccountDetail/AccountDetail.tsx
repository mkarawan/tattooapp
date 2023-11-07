import React from "react";
import "./AccountDetail.css";
import { FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import BackButton from "../../components/BackButton/BackButton.tsx";

const AccountDetail: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="padding">
        <p className="title-text">Dane</p>
        <div className="user-data user-data-detail">
          <img src="user.jpg" alt="user-avatar" />
          <div>
            <IconContext.Provider
              value={{ size: "25px", color: "var(--pink-text-color)" }}
            >
              <div>
                <FaEdit />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <p className="uppercase user-name">Nazwa uzytkownika</p>
      </div>
      <div className="info">
        <div className="info-line">
          <p className="account-info">email</p>
          <p className="account-info">wszystkie</p>
        </div>
        <div className="info-line">
          <p className="account-info">telefon</p>
          <p className="account-info">czarny</p>
        </div>
        <div className="info-line">
          <p className="account-info">data dołączenia</p>
          <p className="account-info">od 15cm</p>
        </div>
      </div>
    </>
  );
};

export default AccountDetail;
