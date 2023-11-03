import React from "react";
import Stars from "../Stars/Stars.tsx";
// import { useParams } from 'react-router-dom';
import "./ArtistCard.css";

const ArtistCard: React.FC = () => {
  // const id = useParams();
  return (
    <>
      <div className={"design-card"}>
        <img src={"artist1.jpg"} />
        <div className={"artist-card-first-line first-line"}>
          <p>Imię artysty</p>
          <Stars />
        </div>
        <p className="opinions">30 opinii</p>
        <div className="tags">
          <p>Minimalizm</p>
          <p>Mikrorealizm</p>
          <p>Dotwork</p>
          <p>Lineart</p>
          <p>Sketch</p>
        </div>
      </div>
    </>
  );
};
export default ArtistCard;
