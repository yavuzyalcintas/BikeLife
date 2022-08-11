import { gql, useQuery } from "@apollo/client";
import { BikesQuery } from "../../common/interfaces/bikes.interface";

const GET_BIKES = gql`
query GetBikes($input: GetBikesProxyRequestInput){
    bikes(input: $input) {
        nextPage
        ttl
        lastUpdated
        totalCount
        items {
            bikeId
            vehicleType
            totalBookings
        }
    }
}
`


export const useGetBikes = (page?: number, vehicleType?: string, bikeId?: string)  => {
    return useQuery<BikesQuery>(GET_BIKES, {
        variables: {input: {page, vehicleType, bikeId}},
    });
}