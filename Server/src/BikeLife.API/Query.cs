using BikeLife.API.Models;
using BikeLife.Service.Models;
using BikeLife.Service.Models.Request;
using BikeLife.Service.Models.Response;
using BikeLife.Service.Proxies.Bike;
using HotChocolate.Data;
using System.Linq;

namespace BikeLife.API
{
    public class Query
    {
        [UseProjection]
        public async Task<BikesModel> GetBikes([Service] IBikeProxyService bikeProxyService, GetBikesProxyRequest? input)
        {
            var response = await bikeProxyService.GetBikesAsync(new GetBikesProxyRequest { BikeId = input?.BikeId, VehicleType = input?.VehicleType, Page = input?.Page });
            return new BikesModel
            {
                Items = response.Data.Bikes,
                LastUpdated = response.LastUpdated,
                NextPage = response.NextPage,
                TotalCount = response.TotalCount,
                Ttl = response.Ttl,
            };
        }
    }
}
