import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";
import { MdArrowBackIos } from "react-icons/md";
import { IconContext } from "react-icons";

const BackButton: React.FC<{ headerSection?: string }> = ({
  headerSection,
}) => {
  const navigate = useNavigate();

  return (
    <div className={"header-flex"}>
      <IconContext.Provider value={{ size: "25px" }}>
        <MdArrowBackIos
          onClick={() => navigate(-1)}
          className={"button-back"}
        />
      </IconContext.Provider>
      <p className="uppercase">{headerSection}</p>
    </div>
  );
};
export default BackButton;
