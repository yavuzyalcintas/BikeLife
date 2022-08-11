import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Bike } from "../../../common/interfaces/bike.interface";
import { useGetBike } from "../../../hooks/bike/useGetBike";
import "./bikes-grid-item.component.css";

const BikesGridItem: React.FC<{ bike: Bike }> = ({ bike }: { bike: Bike }) => {
  const [show, setShow] = useState(false);

  const [getBike, { loading, data }] = useGetBike();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    getBike({
      variables: {
        id: bike.bikeId,
      },
    });
    setShow(true);
  };

  return (
    <>
      <div className="bikes-grid-item">
        <Row>
          <Col>
            <b>{bike.bikeId}</b>
          </Col>
          <Col>{bike.vehicleType}</Col>
          <Col>
            <Button onClick={handleShow}>Details</Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>{bike.bikeId} Details</Modal.Title>
        </Modal.Header>
        {loading && <Modal.Body>Loading</Modal.Body>}
        {data?.bike.item && (
          <Modal.Body>
            <p>
              <b>Vehicle Type:</b> {data?.bike.item.vehicleType}
            </p>
            <p>
              <b>Total Bookings:</b> {data?.bike.item.totalBookings}
            </p>
            <p>
              <b>Reserved:</b>{" "}
              {data?.bike.item.isReserved == false ? "Not " : " "} Reserved
            </p>
            <p>
              <b>Status:</b>{" "}
              {data?.bike.item.isDisabled ? "Disabled" : "Enabled"}
            </p>
            <p>
              <b>Android:</b> {data?.bike.item.android}
            </p>
            <p>
              <b>IOS:</b> {data?.bike.item.ios}
            </p>
            <p>
              <b>Longitude:</b> {data?.bike.item.lon}
            </p>
            <p>
              <b>Latitude:</b> {data?.bike.item.lat}
            </p>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BikesGridItem;
