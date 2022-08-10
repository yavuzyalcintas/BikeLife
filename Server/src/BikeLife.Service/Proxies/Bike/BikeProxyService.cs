using BikeLife.Service.Models.Request;
using BikeLife.Service.Models;
using BikeLife.Service.Utils.HttpClients;
using BikeLife.Service.Utils;
using BikeLife.Service.Models.Response;
using System.Text.Json;
using Newtonsoft.Json;

namespace BikeLife.Service.Proxies.Bike
{
    public interface IBikeProxyService
    {
        Task<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>> GetBikesAsync(GetBikesProxyRequest? request);

        Task<BikeProxyPaginationBaseResponse<GetBikeProxyResponse>> GetBikeAsync(string bikeId);
    }

    public class BikeProxyService : IBikeProxyService
    {
        private readonly IBikeProxyHttpClient _bikeProxyHttpClient;

        public BikeProxyService(IBikeProxyHttpClient bikeProxyHttpClient)
        {
            _bikeProxyHttpClient = bikeProxyHttpClient;
        }

        public async Task<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>> GetBikesAsync(GetBikesProxyRequest? request)
        {
            string query = $"/items?{request?.GetQueryString()}";

            using (var response = await _bikeProxyHttpClient.Client.GetAsync(query))
            {
                BikeProxyPaginationBaseResponse<GetBikesProxyResponse>? result = null;
                if (response.IsSuccessStatusCode)
                {
                    var contentStream = await response.Content.ReadAsStringAsync();

                    result = JsonConvert.DeserializeObject<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>>(contentStream);

                    if (result?.Data == null)
                        throw new Exception("GetBikes returns error.");
                }

                if (result == null)
                    throw new Exception("Bikes not found.");

                return result;
            }
        }

        public async Task<BikeProxyPaginationBaseResponse<GetBikeProxyResponse>> GetBikeAsync(string bikeId)
        {
            string query = $"/items?bike_id={bikeId}";

            using (var response = await _bikeProxyHttpClient.Client.GetAsync(query))
            {
                BikeProxyPaginationBaseResponse<GetBikeProxyResponse>? result = null;
                if (response.IsSuccessStatusCode)
                {
                    var contentStream = await response.Content.ReadAsStringAsync();

                    result = JsonConvert.DeserializeObject<BikeProxyPaginationBaseResponse<GetBikeProxyResponse>>(contentStream);

                    if (result?.Data == null)
                        throw new Exception("GetBike returns error.");
                }

                if (result == null)
                    throw new Exception("Bike not found.");

                return result;
            }
        }
    }
}
