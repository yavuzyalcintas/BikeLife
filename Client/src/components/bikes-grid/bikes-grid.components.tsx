import React from "react";
import { Col, Row } from "react-bootstrap";
import { Bike } from "../../common/interfaces/bike.interface";
import BikesGridItem from "./bikes-grid-item/bikes-grid-item.component";
import "./bikes-grid.component.css";

interface BikesGridProps {
  bikes: Bike[];
  ttl: number;
}

const BikesGrid: React.FC<BikesGridProps> = ({
  bikes,
  ttl,
}: BikesGridProps) => {
  return (
    <div className="bikes-grid">
      <Row>
        <Col> </Col>
        <Col className="details">
          <p>
            Will refresh in: <b>{ttl}</b> seconds
          </p>
          <p>
            Total Bookings of Listed Bikes:{" "}
            <b>
              {bikes.reduce(
                (total, currentValue) =>
                  (total = total + currentValue.totalBookings),
                0
              )}
            </b>
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>
            <b>BikeId</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>VehicleType</b>
          </h3>
        </Col>
        <Col> </Col>
      </Row>
      <hr />
      {bikes.length == 0
        ? "Bikes not found"
        : bikes
            .filter((x) => x.bikeId)
            .map((bike) => (
              <div key={bike.bikeId}>
                <BikesGridItem bike={bike} />
              </div>
            ))}
    </div>
  );
};

export default BikesGrid;
