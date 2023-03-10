import React from "react";
import { Slot } from "./";
import "./slots.scss";

function Slots(props) {
  const { values, rowIndex, editable, hidden } = props;
  // console.log("Slots", values, rowIndex, editable, hidden);
  return (
    <div className="Slots">
      {values.map((value, slotIndex) => {
        const slotData = Object.assign(
          {},
          {
            value,
            hidden,
            slotIndex,
            rowIndex,
            editable,
          }
        );
        return <Slot {...slotData} key={`Row-${rowIndex}-Slot-${slotIndex}`} />;
      })}
    </div>
  );
}

export default Slots;
