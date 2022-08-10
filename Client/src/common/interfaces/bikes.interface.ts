import { Bike } from "./bike.interface"

export interface Bikes {
    nextPage: boolean
    ttl: number
    lastUpdated: Date
    items: Bike[]
}