import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http:HttpClient) { }

fetchDetail(city:string,state:string)
{
  return this.http.get(`https://nominatim.openstreetmap.org/search?q=${city},${state}&format=json&limit=1`);
}
getWeather(lat:string,lon:string)
{
  const headers = {
    'latitude':lat,
    'longitude':lon
  };
  return this.http.get(`http://localhost:8080/getWeather`,{headers});
}
}
