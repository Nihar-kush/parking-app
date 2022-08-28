import React from "react";

export default function Form({
  data,
  setData,
  feedData,
  parkingSlots,
  selected,
  exit,
}) {
  const submitForm = (e) => {
    e.preventDefault();
    if (parkingSlots[selected] && parkingSlots[selected].isOccupied) {
      exit();
    } else feedData();
  };
  return (
    <div className=" bg-red-300 p-20  col-span-2 flex items-center justify-center">
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-4 p-5 items-center"
      >
        <div className="flex justify-between items-center w-80">
          <label htmlFor="driverName">Driver Name</label>
          {parkingSlots[selected] && parkingSlots[selected].isOccupied ? (
            <div>{parkingSlots[selected].name}</div>
          ) : (
            <input
              type="text"
              name="driverName"
              value={data.name || ""}
              id="driverName"
              className="ring-1 rounded ring-black p-3"
              pattern="^[a-zA-Z\s]+"
              placeholder="Type your name"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          )}
        </div>
        <div className="flex justify-between items-center w-80">
          <label htmlFor="vehicleNumber">Vehicle No.</label>
          {parkingSlots[selected] && parkingSlots[selected].isOccupied ? (
            <div>{parkingSlots[selected].vehicleNumber}</div>
          ) : (
            <input
              type="text"
              name="vehicleNumber"
              id="vehicleNumber"
              value={data.vehicleNumber || ""}
              className="ring-1 rounded ring-black p-3 uppercase"
              pattern="^[a-zA-Z\s]+"
              placeholder="GJ 01 AA 1234"
              onChange={(e) => {
                setData({ ...data, vehicleNumber: e.target.value });
              }}
            />
          )}
        </div>
        {parkingSlots[selected] && parkingSlots[selected].isOccupied && (
          <div className="flex justify-between items-center w-80">
            <label>Entry time</label>
            <div>{parkingSlots[selected].entryTime}</div>
          </div>
        )}
        {parkingSlots[selected] && parkingSlots[selected].isOccupied ? (
          <input
            type="submit"
            value="exit"
            className="py-2 px-6 ml-16 mt-5 w-40 cursor-pointer rounded bg-black text-white shadow-red-600 shadow"
          />
        ) : (
          <input
            type="submit"
            value="park"
            className="py-2 px-6 ml-16 mt-5 w-40 cursor-pointer rounded bg-black text-white shadow-red-600 shadow"
          />
        )}
      </form>
    </div>
  );
}
