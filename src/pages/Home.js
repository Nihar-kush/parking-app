import React, { useState } from "react";
import Form from "../components/Form";
import Parking from "../components/Parking";

export default function Home() {
  const [parkingSlots, setParkingSlots] = useState(
    Array.from({ length: 12 }, (_, i) => i + 1)
  );
  const [selected, setSelected] = useState();
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    vehicleNumber: "",
  });

  const feedData = () => {
    if (!data.name) {
      alert("name is required");
      return;
    }
    if (!data.vehicleNumber) {
      alert("vehicleNumber is required");
      return;
    }
    let updatedParkingSlots = [...parkingSlots];
    updatedParkingSlots[selected] = {
      ...data,
      entryTime: new Date().toLocaleTimeString(),
      isOccupied: true,
    };
    setParkingSlots(updatedParkingSlots);
    setData({});
    setSelected(undefined);
    setCount((prev) => prev + 1);
  };

  const exit = () => {
    alert("Checked out at: " + new Date().toLocaleTimeString());
    let updatedParkingSlots = [...parkingSlots];
    updatedParkingSlots[selected] = {};
    setParkingSlots(updatedParkingSlots);
    setData({});
    setSelected(undefined);
    setCount((prev) => prev - 1);
  };
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className=" p-5 mb-4 w-full text-center font-bold bg-white text-2xl">
        Total Parked-Vehicles: {count}
      </div>
      <div className="grid grid-cols-3 gap-10 h-90vh w-5/6">
        {selected === undefined ? (
          <div className=" bg-red-300 p-20 col-span-2 flex flex-col gap-4 items-center justify-center">
            <h1 className="bg-black text-white p-5 ring-1 ring-black rounded-lg">
              Park Vehicle
            </h1>
            <p className="bg-white p-5 ring-1 ring-black rounded-lg">
              Click on an empty slot to park a vehicle
            </p>
            <p className="bg-white p-5 ring-1 ring-black rounded-lg">
              Click on an occupied slot to view details
            </p>
          </div>
        ) : (
          <Form
            data={data}
            setData={setData}
            feedData={feedData}
            parkingSlots={parkingSlots}
            selected={selected}
            exit={exit}
          />
        )}
        <Parking
          data={data}
          parkingSlots={parkingSlots}
          feedData={feedData}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
    </div>
  );
}
