using BikeLife.API.Models;
using BikeLife.Service;

namespace BikeLife.API
{
    public class Mutation
    {
        public async Task<string> GetToken([Service] IIdentityService identityService, User input) => await identityService.Authenticate(input.Username, input.Password);
    }
}
