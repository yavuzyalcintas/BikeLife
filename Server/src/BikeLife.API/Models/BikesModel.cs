using BikeLife.Service.Models;
using Newtonsoft.Json;

namespace BikeLife.API.Models
{
    public class BikesModel
    {
        public long LastUpdated { get; set; }

        public int Ttl { get; set; }

        public int TotalCount { get; set; }

        public bool? NextPage { get; set; }

        public List<BikeData> Items { get; set; }
    }
}
