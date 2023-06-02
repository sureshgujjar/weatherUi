import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherApiService } from 'src/service/weather-api.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  lat:string="";
  log:string="";
  constructor(private weatherService:WeatherApiService,private router:ActivatedRoute) {
  
    
  }
  ngOnInit(): void {
      this.router.snapshot.params['city']
      this.weatherService.fetchDetail( this.router.snapshot.params['city'],this.router.snapshot.params['state']).subscribe(
         (response:any)=>{console.log(response[0].lat+"  "+response[0].lon)}
      );     
  }

}
