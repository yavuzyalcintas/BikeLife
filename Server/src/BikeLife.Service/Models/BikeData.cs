using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models
{
    public class BikeData
    {
        [JsonProperty("bike_id")]
        public string? BikeId { get; set; }

        [JsonProperty("lat")]
        public double? Lat { get; set; }

        [JsonProperty("lon")]
        public double? Lon { get; set; }

        [JsonProperty("is_reserved")]
        public object? IsReservedObj { get; set; }

        public bool IsReserved
        {
            get
            {
                if (IsReservedObj == null)
                    return false;

                return Convert.ToBoolean(IsReservedObj);
            }
        }


        [JsonProperty("is_disabled")]
        public object? IsDisabledObj { get; set; }

        public bool IsDisabled
        {
            get
            {
                if (IsDisabledObj == null)
                    return false;

                return Convert.ToBoolean(IsDisabledObj);
            }
        }

        [JsonProperty("vehicle_type")]
        public string? VehicleType { get; set; }

        [JsonProperty("total_bookings")]
        public object? TotalBookingsObj { get; set; }

        public int TotalBookings { 
            get {
                if (TotalBookingsObj == null)
                    return 0;

                return Convert.ToInt32(TotalBookingsObj);
            }
        }

        [JsonProperty("android")]
        public string? Android { get; set; }

        [JsonProperty("ios")]
        public string? Ios { get; set; }
    }
}
