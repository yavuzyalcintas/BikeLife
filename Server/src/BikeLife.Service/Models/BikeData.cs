using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models
{
    public class BikeData
    {
        [JsonProperty("bike_id")]
        public string BikeId { get; set; }

        [JsonProperty("lat")]
        public double Lat { get; set; }

        [JsonProperty("lon")]
        public double Lon { get; set; }

        [JsonProperty("is_reserved")]
        public object IsReserved { get; set; }

        [JsonProperty("is_disabled")]
        public object IsDisabled { get; set; }

        [JsonProperty("vehicle_type")]
        public string VehicleType { get; set; }

        [JsonProperty("total_bookings")]
        public object TotalBookings { get; set; }

        [JsonProperty("android")]
        public string Android { get; set; }

        [JsonProperty("ios")]
        public string Ios { get; set; }
    }
}
