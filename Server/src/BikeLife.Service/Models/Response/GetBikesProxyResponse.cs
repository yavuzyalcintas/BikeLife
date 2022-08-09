using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models.Response
{
    public class GetBikesProxyResponse
    {
        [JsonProperty("bikes")]
        public List<BikeData> Bikes { get; set; }
    }
}
