using BikeLife.API.Models;

namespace BikeLife.API
{
    public class Mutation
    {
        public async Task<string> GetToken(User input)
        {
            return "Bearer ahmet";
        }
    }
}
