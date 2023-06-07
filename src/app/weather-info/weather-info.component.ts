import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherApiService } from 'src/service/weather-api.service';
export interface WeatherInfo{
  latitude:number;
	longitude:number;
  timezone:string;
  elevation:number;
  current_weather:
  {
     temperature:number;
     windspeed:number;
     winddirection:number;
     time:Date;
  }
}
@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit{
  lat:string="";
  lon:string="";
  city!:string;
  state!:string;
  weatherInfo!:WeatherInfo; 
  constructor(private weatherService:WeatherApiService,private router:ActivatedRoute) {
  
    
  }
  ngOnInit(): void {
    this.city=this.router.snapshot.params['city'];
    this.state=this.router.snapshot.params['state'];
    this.weatherService.fetchDetail( this.city,this.state).subscribe(
       (response:any)=>{this.lat=response[0].lat;this.lon=response[0].lon}
    ).add(()=>
     {
         this.weatherService.getWeather(this.lat,this.lon).subscribe(
          (data:any)=>{
            console.log(data);
            this.weatherInfo=data;
            this.postWeatherData(this.weatherInfo )
          }
         );

     } 
    );
  
  }
  
  postWeatherData(weatherInfo:WeatherInfo)
  {
         setInterval(()=>{this.weatherService.postWeather(weatherInfo)
          .subscribe((data)=>console.log(data)) 
        },1000*60*60*2);
  }
   
 
  
 
}
 
   


