import React, { useState } from "react";
import DesignCard from "../../components/DesignCard/DesignCard";
import "./Design.css";
import BackButton from "../../components/BackButton/BackButton.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import ViewButton from "../../components/ViewButton/ViewButton.tsx";

const Designs: React.FC = () => {
  const [viewType, setViewType] = useState<boolean>(false);

  return (
    <>
      <BackButton />
      <div className="padding">
        <h1 className={"title-text header-text"}>Wzory</h1>
        <SearchBar />
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
export default Designs;
