import {IWeather} from "../interfaces/weather.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ICategory, IDataJSON} from "../interfaces/category.interface";

@Injectable({
  providedIn:'root'
})
export class WeatherService{
  constructor(private httpClient: HttpClient) {
  }



  currentWeather(cityCode : string){
    var parameters = new HttpParams();
    parameters = parameters.append('q', cityCode);
    parameters = parameters.append('appid','09a71427c59d38d6a34f89b47d75975c');
    parameters = parameters.append('units','metric');
    return this.httpClient.get<IWeather>("https://api.openweathermap.org/data/2.5/weather",
      {
        params: parameters
      })

  }

  foreCast (cityCode:string){
    var parameters = new HttpParams();
    parameters = parameters.append('q', cityCode);
    parameters = parameters.append('appid','09a71427c59d38d6a34f89b47d75975c');
    parameters = parameters.append('units','metric');
    return this.httpClient.get<any>("https://api.openweathermap.org/data/2.5/forecast",
      {
        params: parameters
      })
  }

  contactList(){
    return this.httpClient.get<IDataJSON1>('http://localhost:4200/assets/data1.json');
  }
}
