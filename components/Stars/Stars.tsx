import React from "react";
import "./Stars.css";
import { IconContext } from "react-icons";
import { HiStar } from "react-icons/hi";

const Stars: React.FC = () => {
  return (
    <div className={"stars"}>
      <IconContext.Provider value={{ size: "25px", color: "var(--red)" }}>
        <div>
          <HiStar />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "25px", color: "var(--red)" }}>
        <div>
          <HiStar />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "25px", color: "var(--red)" }}>
        <div>
          <HiStar />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "25px", color: "var(--red)" }}>
        <div>
          <HiStar />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "25px", color: "var(--red)" }}>
        <div>
          <HiStar />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Stars;
