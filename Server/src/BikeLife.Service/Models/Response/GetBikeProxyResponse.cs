using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models.Response
{
    public class GetBikeProxyResponse
    {
        [JsonProperty("bike")]
        public BikeData Bike { get; set; }
    }
}
