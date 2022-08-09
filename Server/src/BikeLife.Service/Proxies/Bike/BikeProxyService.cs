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
        Task<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>> GetBikesAsync(GetBikesProxyRequest request);
    }

    public class BikeProxyService : IBikeProxyService
    {
        private readonly IBikeProxyHttpClient _bikeProxyHttpClient;

        public BikeProxyService(IBikeProxyHttpClient bikeProxyHttpClient)
        {
            _bikeProxyHttpClient = bikeProxyHttpClient;
        }

        public async Task<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>> GetBikesAsync(GetBikesProxyRequest request)
        {
            string query = $"/items?{request.GetQueryString()}";

            using (var response = await _bikeProxyHttpClient.Client.GetAsync(query))
            {
                BikeProxyPaginationBaseResponse<GetBikesProxyResponse>? result = null;
                if (response.IsSuccessStatusCode)
                {
                    var contentStream = await response.Content.ReadAsStringAsync();

                    //TODO: ERROR! Cannot map at single item response
                    result = JsonConvert.DeserializeObject<BikeProxyPaginationBaseResponse<GetBikesProxyResponse>>(contentStream);

                    if (result?.Data == null)
                        throw new Exception("GetBikes returns error.");
                }

                if (result == null)
                    throw new Exception("Bikes not found.");

                return result;
            }
        }
    }
}
