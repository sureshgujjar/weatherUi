import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { WeatherApiService } from 'src/service/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  latitude!:string;
  longitude!:string;
  constructor(private weatherService:WeatherApiService,private router:Router)
  {

  }
  formData = {city:"", state:""};
  sendDetail(detailForm:NgForm)
  {
   
    this.router.navigate(['weatherInfo',this.formData.city,this.formData.state]);
    detailForm.resetForm();

  }
  
}
