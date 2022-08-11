export interface BikeQuery{
    bike:BikeItem;
}

export interface BikeItem{
    ttl: number
    lastUpdated: Date
    item: Bike
}

export interface Bike {
    bikeId: string
    lat?: number
    lon?: number
    vehicleType?: string
    android?: string
    ios?: string
    totalBookings: number
    isReserved: boolean
    isDisabled: boolean
}



