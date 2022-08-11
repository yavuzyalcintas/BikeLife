# BikeLife
BikeLife is a gateway application for converting RestAPI into GraphQL. And data represents with simple Vite-React-TS client.

## Tech Stack
- Dotnet Core 6
  - Hot Chocolate (for GraphQL)
  
- Vite React-TS
  - Apollo Client

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
