# BikeLife
BikeLife is a gateway application for converting RestAPI into GraphQL. And data represents with simple Vite-React-TS client. 

## Introduction
### Server
For starting the server application, go to ```Server/src/BikeLife.API``` directory in your terminal and run ```dotnet run``` command. You can test GraphQL service with Banana Cake Pop playground at
https://localhost:7227/graphql/

### Client
For starting the client application, go to ```Client/``` directory in your terminal and run ```npm run dev``` command. You can test React application at http://127.0.0.1:5173/

## Tech Stack
- Dotnet Core 6
  - Hot Chocolate (for GraphQL)
  
- Vite React-TS
  - Apollo Client
  - Bootstrap

## Features
- Bike Listing and pagination
- Filtering
- Authentication
- Bike detail information
- Automatically refresh after TTL

## Rest API Example

|QS Parameters  |
|---|
|page   |
|vehicle_type   |
|bike_id   |

The response example:
```json
{
  "last_updated": 1603386427821,
  "ttl": 12,
  "data": {
    "bikes": [
      {
        "bike_id": "T6S1",
        "lat": 38.86484,
        "lon": -77.077003,
        "is_reserved": 0,
        "is_disabled": 0,
        "vehicle_type": "scooter"
      },
      {
        "bike_id": "P6Z2",
        "lat": 38.882187,
        "lon": -77.111713,
        "is_reserved": 0,
        "is_disabled": 0,
        "vehicle_type": "scooter"
      },
      ...
    ]
  }
}
```

## Screenshots
![Login](/screenshots/login.png "Login")
![Grid](/screenshots/grid.png "Grid")
![Filter](/screenshots/filter.png "Filter")
![Bike Detail](/screenshots/detail.png "Bike Detail")
