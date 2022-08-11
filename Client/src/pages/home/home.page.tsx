import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import BikesGrid from "../../components/bikes-grid/bikes-grid.components";
import { useGetBikes } from "../../hooks/bike/useGetBikes";
import "./home.page.css";

interface FormData {
  bikeId: string;
  vehicleType: string;
}

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<string>("");
  const [bikeId, setBikeId] = useState<string>("");
  const [ttl, setTtl] = useState<number>(-1);
  const { data, loading, fetchMore, startPolling, stopPolling } = useGetBikes(
    page,
    vehicleType,
    bikeId
  );

  // TTL Timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading) {
        setTtl((val) => val - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  // TTL data refresh
  useEffect(() => {
    if (data?.bikes.ttl) {
      setTtl(data?.bikes.ttl);
      startPolling(data?.bikes.ttl * 1000);
    }
    return stopPolling;
  }, [data?.bikes.ttl]);

  // Pagination
  const nextPage = () => {
    if (data?.bikes.nextPage && data?.bikes.items) {
      setPage(page + 1);
    }
  };

  // Filter
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ bikeId, vehicleType }) => {
    setPage(1);
    setVehicleType(vehicleType);
    setBikeId(bikeId);
    fetchMore({
      variables: {
        input: {
          vehicleType,
          page,
          bikeId,
        },
      },
      updateQuery(_, { fetchMoreResult }) {
        return fetchMoreResult;
      },
    });
  });

  return (
    <div className="home">
      <h1>Home</h1>

      <div className="bikes-filter">
        <Row>
          <Col md={4} lg={4}>
            <Form onSubmit={onSubmit}>
              <Form.Control
                type="text"
                placeholder="bikeId"
                {...register("bikeId")}
              />

              <Form.Select {...register("vehicleType")}>
                <option value={undefined}></option>
                <option value="scooter">Scooter</option>
                <option value="bike">Bike</option>
              </Form.Select>

              <Button type="submit" name="Search">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <>
          <BikesGrid bikes={data?.bikes.items || []} ttl={ttl} />
          {(data?.bikes.totalCount || 9) >= 10 && data?.bikes.items && (
            <Button variant="warning" size="lg" onClick={nextPage}>
              Page: {page}/{Math.floor((data?.bikes.totalCount || 10) / 10)}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
