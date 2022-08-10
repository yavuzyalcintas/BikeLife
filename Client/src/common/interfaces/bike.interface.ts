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