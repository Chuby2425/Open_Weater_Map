import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Shared/services/weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat!: number;
  lon!: number;
  weather!: any;
  pronostic!: any;
/*
  actualweather: any ={
    icon:''
  }
*/
  constructor(private weatherservice: WeatherService) {

  }
  ngOnInit() {
    this.getLocation();
    this.getPronostic();
    //this.getCurrentWeather();

  }
//con esto jalo la geolocalizacion
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherservice.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        })
      })
    }
  }

  getCity(city: any){
    this.weatherservice.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }


  getPronostic(){
    this.weatherservice.getPronostic()
      .subscribe(
        (data: any) =>{
          this.pronostic = data;
          console.log(data);
        }
      );
  }
/*
  getCurrentWeather(){
    this.weatherservice.getWeatherDataByCoords(this.lat, this.lon)
      .subscribe(
        (data:any)=>{
          this.actualweather.icon =data.weather[0].icon
        }
      )

  }
*/



}
