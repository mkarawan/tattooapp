import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
import "./DesignCard.css";
import { IconContext } from "react-icons";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DesignCard: React.FC = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  // const id = useParams();
  return (
    <>
      <div className={"design-card"}>
        <Link to={"/designDetail"}>
          <img src={"tattoo1.jpg"} />
        </Link>
        <div className={"design-card-description"}>
          <p>Artysta</p>
          <p className="heart" onClick={() => setIsFavourite(!isFavourite)}>
            {!isFavourite && (
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "var(--grey-text-color)",
                }}
              >
                <div>
                  <BsHeart />
                </div>
              </IconContext.Provider>
            )}
            {isFavourite && (
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "var(--pink-text-color",
                }}
              >
                <div>
                  <BsHeartFill />
                </div>
              </IconContext.Provider>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default DesignCard;
