import React, { useState } from "react";
import "./Favourites.css";
import BackButton from "../../components/BackButton/BackButton";
import DesignCard from "../../components/DesignCard/DesignCard";
import ViewButton from "../../components/ViewButton/ViewButton.tsx";

const Favourites: React.FC = () => {
  const [viewType, setViewType] = useState<boolean>(true);

  return (
    <>
      <BackButton headerSection={"Ulubione"} />
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
      </div>
    </>
  );
};

export default Favourites;
