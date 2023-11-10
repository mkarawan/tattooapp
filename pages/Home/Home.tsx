import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import DesignCard from "../../components/DesignCard/DesignCard.tsx";
import Header from "../../components/Header/Header.tsx";
import UpcomingVisit from "../../components/VisitCard/UpcomingVisit.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header />

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
      <section>
        <div className="padding">
          <h1 className="title-text">Dzisiejsze wizyty</h1>
          <UpcomingVisit />
          <UpcomingVisit />
          <p className="new-btn">
            Nowy wzor <span>+</span>
          </p>
          <p className="new-btn">
            Dodaj pracę <span>+</span>
          </p>
          <h1 className="title-text">Rezerwacje</h1>
          <p className="uppercase thin">Brak</p>
        </div>
        <div className="new-reservation">
          <div className="reservation-line">
            <p>12.02.2024</p>
            <p>Klient 1</p>
          </div>
          <div className="reservation-line">
            <p>12.02.2024</p>
            <p>Klient 1</p>
          </div>
          <div className="reservation-line">
            <p>12.02.2024</p>
            <p>Klient 1</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
