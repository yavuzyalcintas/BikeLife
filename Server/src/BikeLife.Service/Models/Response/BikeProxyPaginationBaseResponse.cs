using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace BikeLife.Service.Models.Response
{
    public class BikeProxyPaginationBaseResponse<T>
    {
        [JsonProperty("last_updated")]
        public long? LastUpdated { get; set; }

        [JsonProperty("ttl")]
        public int? Ttl { get; set; }

        [JsonProperty("total_count")]
        public int? TotalCount { get; set; }

        [JsonProperty("nextPage")]
        public bool? NextPage { get; set; }

        [JsonProperty("data")]
        public T? Data { get; set; }
    }
}
