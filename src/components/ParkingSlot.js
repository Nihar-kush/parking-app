import React, { useState } from "react";

export default function ParkingSlot({
  index,
  setSelected,
  selected,
  occupied,
}) {
  const slotHandler = () => {
    setSelected(index);
  };
  return (
    <div
      className={`h-20 cursor-pointer hover:bg-[#bdf0ff] min-w-[34px] flex flex-col items-center justify-center rounded-md ${
        index === selected
          ? "bg-[#67c7ff]"
          : occupied
          ? "bg-red-600"
          : "bg-white"
      }`}
      onClick={slotHandler}
    >
      <p>Slot</p>
      <p>{index + 1}</p>
    </div>
  );
}
