import React from "react";
// import { useParams } from 'react-router-dom';
import "./DesignCard.css";

const DesignCard: React.FC = () => {
  // const id = useParams();
  return (
    <>
      <div className={"design-card"}>
        <img src={"tattoo1.jpg"} />
        <div className={"design-card-description"}>
          <p>Artysta</p>
          <p>❤️</p>
        </div>
      </div>
    </>
  );
};
export default DesignCard;
