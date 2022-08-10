import React from "react";
import BikesGrid from "../../components/bikes-grid/bikes-grid.components";
import BikesFilter from "../../components/bikes-grid/bikes-filter/bikes-filter.component";
import { useGetBikes } from "../../hooks/bike/useGetBikes";
import "./home.page.css";

const HomePage: React.FC = () => {
  const bikes = useGetBikes();

  return (
    <div className="home">
      <h1>Home</h1>
      <BikesFilter></BikesFilter>
      <BikesGrid bikes={bikes?.items || []} ttl={bikes?.ttl || 0}></BikesGrid>
    </div>
  );
};

export default HomePage;
