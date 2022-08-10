import { Bike } from "./bike.interface"

export interface BikesQuery{
    bikes:Bikes;
}
export interface Bikes {
    nextPage: boolean
    ttl: number
    lastUpdated: Date
    totalCount: number
    items: Bike[]
}