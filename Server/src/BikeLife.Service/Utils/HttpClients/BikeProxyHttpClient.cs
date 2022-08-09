using Microsoft.Extensions.Configuration;

namespace BikeLife.Service.Utils.HttpClients
{
    public interface IBikeProxyHttpClient
    {
        HttpClient Client { get; set; }
    }

    public class BikeProxyHttpClient : IBikeProxyHttpClient
    {
        public BikeProxyHttpClient(HttpClient httpClient, IConfiguration configuration)
        {
            string baseUrl = configuration["BikeApi:BaseUrl"];

            if (string.IsNullOrEmpty(baseUrl)) throw new ArgumentException("BikeApiSettings_has_not_found");

            httpClient.BaseAddress = new Uri(baseUrl);
            Client = httpClient;
        }

        public HttpClient Client { get; set; }
    }

}
