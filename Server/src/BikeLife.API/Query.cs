using BikeLife.API.Models;
using BikeLife.Service.Models.Request;
using BikeLife.Service.Proxies.Bike;
using HotChocolate.AspNetCore.Authorization;

namespace BikeLife.API
{
    public class Query
    {
        [Authorize]
        public async Task<Bikes> GetBikes([Service] IBikeProxyService bikeProxyService, GetBikesProxyRequest? input)
        {
            if (!string.IsNullOrEmpty(input.BikeId))
            {
                var singleResponse = await bikeProxyService.GetBikeAsync(input.BikeId);

                return new Bikes
                {
                    Items = new List<Service.Models.BikeData> { singleResponse.Data?.Bike },
                    LastUpdated = singleResponse.LastUpdated,
                    NextPage = false,
                    TotalCount = 1,
                    Ttl = singleResponse.Ttl,
                };
            }

            var response = await bikeProxyService.GetBikesAsync(input);
            return new Bikes
            {
                Items = response.Data?.Bikes,
                LastUpdated = response.LastUpdated,
                NextPage = response.NextPage,
                TotalCount = response.TotalCount,
                Ttl = response.Ttl,
            };
        }

        [Authorize]
        public async Task<Bike> GetBike([Service] IBikeProxyService bikeProxyService, string id)
        {
            var response = await bikeProxyService.GetBikeAsync(id);
            return new Bike
            {
                Item = response.Data?.Bike,
                LastUpdated = response.LastUpdated,
                TotalCount = response.TotalCount,
                Ttl = response.Ttl,
            };
        }
    }
}
