import React from "react";
import "./Favourites.css";
import BackButton from "../../components/BackButton/BackButton";
import DesignCard from "../../components/DesignCard/DesignCard";

const Favourites: React.FC = () => {
  return (
    <>
      <div className="padding">
        <BackButton />
        <p className="title-text">Ulubione</p>
      </div>

      <DesignCard />
      <DesignCard />
      <DesignCard />
    </>
  );
};

export default Favourites;
