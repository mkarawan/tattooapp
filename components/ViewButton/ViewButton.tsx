import React, { useState } from "react";
import "./ViewButton.css";
import { MdGridView, MdOutlineViewDay } from "react-icons/md";
import { IconContext } from "react-icons";

interface ViewButtonProps {
  onClickRows: () => void;
  onClickColumns: () => void;
}

const ViewButton: React.FC<ViewButtonProps> = ({
  onClickRows,
  onClickColumns,
}) => {
  const [buttonType, setButtonType] = useState<boolean>(false);

  const setColumnView = () => {
    onClickColumns();
    setButtonType(!buttonType);
    console.log("Gelelel");
  };

  const setRowsView = () => {
    onClickRows();
    setButtonType(!buttonType);
  };

  return (
    <div className="view-btn">
      {buttonType && (
        <>
          <IconContext.Provider
            value={{ size: "35px", color: "var(--pink-text-color)" }}
          >
            <div onClick={setColumnView}>
              <MdOutlineViewDay />
            </div>
          </IconContext.Provider>
        </>
      )}
      {!buttonType && (
        <>
          <IconContext.Provider
            value={{ size: "35px", color: "var(--pink-text-color)" }}
          >
            <div onClick={setRowsView}>
              <MdGridView />
            </div>
          </IconContext.Provider>
        </>
      )}
    </div>
  );
};

export default ViewButton;
