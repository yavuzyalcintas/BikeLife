import React from "react";
import { Bike } from "../../../common/interfaces/bike.interface";
import "./bikes-grid-item.component.css";

const BikesGridItem: React.FC<{ bike: Bike }> = ({ bike }: { bike: Bike }) => {
  return (
    <div className="bikes-grid-item">
      {bike.bikeId} - {bike.vehicleType} &nbsp;
      <button>Details</button>
      <hr />
    </div>
  );
};

export default BikesGridItem;
