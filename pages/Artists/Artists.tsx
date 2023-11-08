import React from "react";
import { Link } from "react-router-dom";
import "./Artists.css";
import BackButton from "../../components/BackButton/BackButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Header from "../../components/Header/Header.tsx";

const Artists: React.FC = () => {
  return (
    <>
      <Header />

      <BackButton />

      <div className="padding">
        <h1 className={"title-text header-text"}>Artyści</h1>
        <SearchBar />
      </div>
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
