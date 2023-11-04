import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import DesignCard from "../../components/DesignCard/DesignCard.tsx";

const Home: React.FC = () => {
  return (
    <>
      <div className="padding">
        <div className="greeting-text">
          <h1 className="title-text">
            Otwórz drzwi do nieskończonych możliwości{" "}
          </h1>
        </div>
        <SearchBar />
        <h1 className={"section-title"}>Najnowsze wzory</h1>
      </div>

      <DesignCard />
      <DesignCard />
      <DesignCard />
      {/*<Link to="/designs">*/}
      {/*  <button>Wzory</button>*/}
      {/*</Link>*/}
      {/*<Link to="/artists">*/}
      {/*  <button>Artyści</button>*/}
      {/*</Link>*/}
    </>
  );
};

export default Home;
