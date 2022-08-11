import { gql, OperationVariables, useLazyQuery, useQuery } from "@apollo/client";
import { BikeQuery } from "../../common/interfaces/bike.interface";

const GET_BIKE = gql`
query GetBike($id: String!){
    bike(id: $id){
        ttl
        lastUpdated
        item {
            bikeId
            vehicleType
            totalBookings
            isReserved
            isDisabled
            lat
            lon
            android
            ios
        }
  }
}
`

export const useGetBike = ()  => {
    return useLazyQuery<BikeQuery>(GET_BIKE);
}