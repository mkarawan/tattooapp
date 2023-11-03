import React from "react";
import DesignCard from "../../components/DesignCard/DesignCard";
import { Link } from "react-router-dom";
import "./Design.css";
import BackButton from "../../components/BackButton/BackButton.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";

const Designs: React.FC = () => {
  return (
    <>
      <BackButton />
      <div className="padding">
        <h1 className={"title-text header-text"}>Wzory</h1>
        <SearchBar />
      </div>
      <Link to="/designDetail">
        <DesignCard />
      </Link>
      <Link to="/designCard">
        <DesignCard />
      </Link>
      <Link to="/designCard">
        <DesignCard />
      </Link>
    </>
  );
};
export default Designs;
