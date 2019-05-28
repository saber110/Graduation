import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component'

@Injectable()
export class DataService {
  private uuid = 'UuidExample';
  private Host = "http://139.180.217.184:7777";
  private RaspberryHost = "http://139.180.217.184:33330/";
  constructor(private http: HttpClient,
              private app: AppComponent,) {

    this.uuid = app.getUuid();
    console.log(app.getUuid());
  }

  SetMotor(CMD1:string="11")
  {
    console.log(this.uuid);
    return this.http.get(this.RaspberryHost + this.uuid + '/' + CMD1)
              .toPromise()
              .then(function(response){ return response; })
              .catch(this.handleError);
  }

  getTemperature() {
    return this.http.get(this.Host + '/api/temperature/' + this.uuid)
             .toPromise()
             .then(function(response){ return response; })
             .catch(this.handleError);
  }

  getHumidity() {
    return this.http.get(this.Host + '/api/humidity/' + this.uuid)
             .toPromise()
             .then(function(response){return response; })
             .catch(this.handleError);
  }

  getHeartRate() {
    return this.http.get(this.Host + '/api/heartRate/' + this.uuid)
             .toPromise()
             .then(function(response){return response; })
             .catch(this.handleError);
  }

  getSoup() {
    return this.http.get(this.Host + '/api/getsoup')
             .toPromise()
             .then(function(response){return response; })
             .catch(this.handleError);
  }

  getWeather() {
    return this.http.get(this.Host + '/api/getweather')
             .toPromise()
             .then(function(response){return response; })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
