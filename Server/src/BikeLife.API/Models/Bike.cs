using BikeLife.Service.Models;

namespace BikeLife.API.Models
{
    public class Bike
    {
        public long? LastUpdated { get; set; }

        public int? Ttl { get; set; }

        public int? TotalCount { get; set; }

        public BikeData? Item { get; set; }
    }
}
