import React from "react";
import "./ArtistDetail.css";
import BackButton from "../../components/BackButton/BackButton";
import Stars from "../../components/Stars/Stars";
import DesignCard from "../../components/DesignCard/DesignCard";

const ArtistDetail: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="padding">
        <div className={"first-line"}>
          <h1 className="title-text artist-name">Nazwa artysty</h1>
          <Stars />
        </div>
        <p className="opinions">30 opinii</p>
        <div className="tags detail-tags">
          <p>Minimalizm</p>
          <p>Mikrorealizm</p>
          <p>Dotwork</p>
          <p>Lineart</p>
          <p>Sketch</p>
        </div>
      </div>
      <img src={"artist1.jpg"} />
      <div className="padding">
        <div className="first-line artist-date">
          <p>Najbliższy termin</p>
          <p>3 grudnia</p>
        </div>
        <p className="artist-description">
          Jestem artystką w sercu i duszy, specjalizującą się w tatuowaniu.
          Skóra to moje płótno, na którym tworzę niezwykłe opowieści i wyrażam
          osobowość każdego, kto zasiada w moim fotelu.{" "}
        </p>
        <button className="gradientBtn">Wzór indywidualny</button>
        <p className="section-title designs-title">Wzory</p>
      </div>

      <div className="designs-category">
        <p className="chosen-category">Wolne</p>
        <p>Wykonane</p>
      </div>
      <DesignCard />
      <DesignCard />
      <DesignCard />
    </>
  );
};

export default ArtistDetail;
