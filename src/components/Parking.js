import React, { useState } from "react";
import ParkingSlot from "./ParkingSlot";

export default function Parking({ parkingSlots, setSelected, selected }) {
  return (
    <div className=" bg-red-300 p-20 items-center justify-center text-center grid grid-cols-3 gap-4 gap-x-10">
      {parkingSlots.map((data, index) => (
        <ParkingSlot
          key={"slot-" + index}
          index={index}
          setSelected={setSelected}
          selected={selected}
          occupied={data.isOccupied}
        />
      ))}
    </div>
  );
}
