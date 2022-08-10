import React, { useEffect, useState } from "react";
import BikesGrid from "../../components/bikes-grid/bikes-grid.components";
import BikesFilter from "../../components/bikes-grid/bikes-filter/bikes-filter.component";
import { useGetBikes } from "../../hooks/bike/useGetBikes";
import "./home.page.css";

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [ttl, setTtl] = useState<number>(-1);
  const { data, refetch, loading, startPolling, stopPolling } =
    useGetBikes(page);

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

  const nextPage = () => {
    if (data?.bikes.nextPage && data?.bikes.items) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (data?.bikes.ttl) {
      setTtl(data?.bikes.ttl);
      startPolling(data?.bikes.ttl * 1000);
    }
    return stopPolling;
  }, [data?.bikes.ttl]);

  return (
    <div className="home">
      <h1>Home</h1>
      <BikesFilter></BikesFilter>
      <BikesGrid bikes={data?.bikes.items || []} ttl={ttl} />
      <button className="pagination-button" onClick={nextPage}>
        {page}/{(data?.bikes.totalCount || 10) / 10}
      </button>
    </div>
  );
};

export default HomePage;
