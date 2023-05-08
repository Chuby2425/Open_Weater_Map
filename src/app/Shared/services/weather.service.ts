import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url =  'http://api.openweathermap.org/data/2.5/weather';
apikey = 'c235baeb61ce06bfa1cb0105c223160c'

  constructor(private http: HttpClient) { }



getWeatherDataByCoords(lat: any, lon: any){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units', 'imperial')
  .set('appid', this.apikey)

  return this.http.get(this.url, {params});
}

getWeatherDataByCityName(city: any){
  let params = new HttpParams()
  .set('q', city)
  .set('units', 'imperial')
  .set('appid', this.apikey)

  return this.http.get(this.url, {params});
}

//obtiene el pronostico
getPronostic(){
  return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=santiago&appid=c235baeb61ce06bfa1cb0105c223160c');
}

}
