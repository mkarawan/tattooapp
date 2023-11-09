import React, { useState } from "react";
import "./Visits.css";
import BackButton from "../../components/BackButton/BackButton";
import UpcomingVisit from "../../components/VisitCard/UpcomingVisit.tsx";
import CompletedVisit from "../../components/VisitCard/CompletedVisit.tsx";

const Visits: React.FC = () => {
  const [completedVisit, setCompletedVisit] = useState<boolean>(false);

  return (
    <>
      <BackButton headerSection={"Moje wizyty"} />
      <div className="padding">
        {/*<p className="title-text my-visits">Moje wizyty</p>*/}
      </div>
      <div className="designs-category">
        <p
          onClick={() => setCompletedVisit(false)}
          className={!completedVisit ? "chosen-category" : ""}
        >
          Nadchodzące
        </p>
        <p
          onClick={() => setCompletedVisit(true)}
          className={completedVisit ? "chosen-category" : ""}
        >
          Zakończone
        </p>
      </div>
      <div className="padding">
        {completedVisit && (
          <>
            <CompletedVisit />
          </>
        )}
        {!completedVisit && (
          <>
            <UpcomingVisit />
          </>
        )}
      </div>
    </>
  );
};

export default Visits;
