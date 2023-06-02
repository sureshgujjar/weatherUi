import { HttpClient } from '@angular/common/http';
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
}
