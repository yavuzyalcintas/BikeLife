import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  bikeId: string;
  vehicleType: string;
}

const BikesFilter: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ bikeId, vehicleType }) => {
    console.log(bikeId, vehicleType);
  });

  return (
    <div className="bikes-filter">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="bikeId" {...register("bikeId")} />

        <select {...register("vehicleType")}>
          <option value={undefined}></option>
          <option value="scooter">Scooter</option>
          <option value="bike">Bike</option>
        </select>

        <input type="Submit" name="Search" />
      </form>
    </div>
  );
};

export default BikesFilter;
