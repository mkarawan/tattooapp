import React from "react";
import { Link } from "react-router-dom";
import "./Artists.css";
import BackButton from "../../components/BackButton/BackButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Artists: React.FC = () => {
  return (
    <>
      <BackButton />
      <h1 className={"title-text header-text"}>Artyści</h1>
      <SearchBar />
      <Link to="/artistDetail">
        <ArtistCard />
      </Link>
      <Link to="/artistDetail">
        <ArtistCard />
      </Link>
      <Link to="/artistDetail">
        <ArtistCard />
      </Link>
    </>
  );
};
export default Artists;
