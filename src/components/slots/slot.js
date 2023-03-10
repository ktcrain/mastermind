import React, { useState } from "react";
import colors from "../../utils/colors";
import { useBoardContext } from "../board";

function Slot({ value, rowIndex, slotIndex, hidden, editable }) {
  // console.log("Slot", rowIndex, slotIndex, value);

  const {updateSlot} = useBoardContext();
  const [selectorShow, setSelectorSlow] = useState(false);

  const handleDisplayClick = () => {
    setSelectorSlow(!selectorShow);
  };

  const handleOptionClick = ({ color }) => {
    updateSlot({rowIndex, slotIndex, color});
    setSelectorSlow(!selectorShow);
  };

  return (
    <div
      className="Slot"
      key={`Slot_${slotIndex}`}
    >
      <div className="Slot-Inner" onClick={handleDisplayClick}>
        <div className="Selection">
          <div
            className={`Selection-Display Selection-Display--${value} ${
              hidden ? " Selection-Display--Hidden" : ""
            }`}
          >
            <span></span>
          </div>
          {editable && (
          <div
            className={`Selection-Selector Selection-Selector--${
              selectorShow ? "Show" : "Hidden"
            }`}
          >
            {colors.map((color) => {
              return (
                <div
                  className={`Selection-Selector-Option Selection-Selector-Option--${color}`}
                  key={`Selection-Selector-Option-${rowIndex}-${slotIndex}-${color}`}
                  onClick={(e) => handleOptionClick({ color })}
                >
                  {color}
                </div>
              );
            })}
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Slot;
