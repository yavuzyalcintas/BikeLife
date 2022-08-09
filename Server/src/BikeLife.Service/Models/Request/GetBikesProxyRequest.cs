using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models.Request
{
    public class GetBikesProxyRequest : Pagination
    {
        [JsonProperty("vehicle_type")]
        public string? VehicleType { get; set; }
    }
}
