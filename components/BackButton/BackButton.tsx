import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <img
      src={"button-back.png"}
      className={"button-back"}
      onClick={() => navigate(-1)}
    />
  );
};
export default BackButton;
