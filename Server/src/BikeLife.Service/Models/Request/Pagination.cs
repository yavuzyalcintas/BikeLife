using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models.Request
{
    public class Pagination
    {
        [JsonProperty("page")]
        public int? Page { get; set; }
    }
}
