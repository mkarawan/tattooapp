import React, { useState } from "react";
import "./ArtistDetail.css";
import BackButton from "../../components/BackButton/BackButton";
import Stars from "../../components/Stars/Stars";
import DesignCard from "../../components/DesignCard/DesignCard";
import { Link } from "react-router-dom";
import ViewButton from "../../components/ViewButton/ViewButton.tsx";

const ArtistDetail: React.FC = () => {
  const [viewType, setViewType] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false);

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
        <Link to={"/bookIndividual"}>
          <button className="gradientBtn">Wzór indywidualny</button>
        </Link>
        <p className="section-title designs-title">Wzory</p>
      </div>

      <div className="designs-category">
        <p
          onClick={() => setCategory(false)}
          className={!category ? "chosen-category" : ""}
        >
          Nadchodzące
        </p>
        <p
          onClick={() => setCategory(true)}
          className={category ? "chosen-category" : ""}
        >
          Zakończone
        </p>
      </div>
      <div className="padding">
        <ViewButton
          onClickColumns={() => setViewType(!setViewType)}
          onClickRows={() => setViewType(!viewType)}
        />
      </div>

      <div className={viewType ? "grid-view" : "view"}>
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
      </div>
    </>
  );
};

export default ArtistDetail;
