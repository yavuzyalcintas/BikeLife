﻿using BikeLife.API.Models;
using BikeLife.Service.Models.Request;
using BikeLife.Service.Proxies.Bike;

namespace BikeLife.API
{
    public class Query
    {
        public async Task<Bikes> GetBikes([Service] IBikeProxyService bikeProxyService, GetBikesProxyRequest? input)
        {
            var response = await bikeProxyService.GetBikesAsync(input);
            return new Bikes
            {
                Items = response.Data.Bikes,
                LastUpdated = response.LastUpdated,
                NextPage = response.NextPage,
                TotalCount = response.TotalCount,
                Ttl = response.Ttl,
            };
        }

        public async Task<Bike> GetBike([Service] IBikeProxyService bikeProxyService, string id)
        {
            var response = await bikeProxyService.GetBikeAsync(id);
            return new Bike
            {
                Item = response.Data.Bike,
                LastUpdated = response.LastUpdated,
                TotalCount = response.TotalCount,
                Ttl = response.Ttl,
            };
        }
    }
}