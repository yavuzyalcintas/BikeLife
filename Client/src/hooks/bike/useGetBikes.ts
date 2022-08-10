import { gql, useQuery } from "@apollo/client";
import { Bikes } from "../../common/interfaces/bikes.interface";

const GET_BIKES = gql`
query GetBikes($input: GetBikesProxyRequestInput){
    bikes(input: $input) {
        nextPage
        ttl
        lastUpdated
        items {
            bikeId
            vehicleType
            totalBookings
        }
    }
}
`

export const useGetBikes = (page?: number, vehicleType?: string) : Bikes | undefined => {
    const { data } = useQuery(GET_BIKES, {
        variables: {input: {page: page, vehicleType: vehicleType}}
    });

    return data?.bikes;
}