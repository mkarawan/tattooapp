import React, { useState } from "react";
import "./AccountDetail.css";
import { FaEdit, FaSave } from "react-icons/fa";
import { IconContext } from "react-icons";
import BackButton from "../../components/BackButton/BackButton.tsx";
import { Link } from "react-router-dom";

const AccountDetail: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      <BackButton headerSection={"Dane"} />
      <div className="padding">
        {/*<p className="title-text">Dane</p>*/}
        <div className="user-data user-data-detail">
          <img src="user.jpg" alt="user-avatar" />
          <div>
            <IconContext.Provider
              value={{ size: "25px", color: "var(--pink-text-color)" }}
            >
              <div onClick={() => setIsEditing(!isEditing)}>
                {!isEditing && <FaEdit />}
                {isEditing && <FaSave />}
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <p className="uppercase user-name">Nazwa uzytkownika</p>
      </div>
      <div className="info">
        <div className="info-line">
          <p className="account-info account-info-header">email</p>
          {!isEditing && <p className="account-info">email@email.com</p>}
          {isEditing && (
            <input
              type="text"
              className="edit-input"
              defaultValue={"email@email.com"}
            />
          )}
        </div>
        <div className="info-line">
          <p className="account-info account-info-header">telefon</p>
          {!isEditing && <p className="account-info">607156234</p>}
          {isEditing && (
            <input
              type="text"
              className="edit-input"
              defaultValue={"607156234"}
            />
          )}
        </div>
        <div className="info-line">
          <p className="account-info account-info-header">data dołączenia</p>
          {!isEditing && <p className="account-info">8.11.2023</p>}
          {isEditing && (
            <input
              type="date"
              className="edit-input"
              defaultValue={"8.11.2023"}
            />
          )}
        </div>
        <Link to="/login">
          <p className="logout">Wyloguj się</p>
        </Link>
      </div>
    </>
  );
};

export default AccountDetail;
