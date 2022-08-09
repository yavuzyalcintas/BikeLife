using BikeLife.API;
using BikeLife.Service.Proxies.Bike;
using BikeLife.Service.Utils.HttpClients;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IBikeProxyService, BikeProxyService>();
builder.Services.AddHttpClient<IBikeProxyHttpClient, BikeProxyHttpClient>();

builder.Services.AddGraphQLServer()
                    .AddQueryType<Query>()
                    .AddProjections()
                    .AddFiltering()
                    .AddSorting();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapGraphQL("/graphql");

app.Run();
