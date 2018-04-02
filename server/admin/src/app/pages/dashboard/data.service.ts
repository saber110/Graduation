import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component'

@Injectable()
export class DataService {

  private uuid = 'UuidExample';
  private Host = "http://123.206.64.174:7777";

  constructor(private http: Http,
              private app: AppComponent,) {

    console.log(app.getUuid());
    this.uuid = app.getUuid();
  }

  getTemperature() {
    return this.http.get(this.Host + '/api/temperature/' + this.uuid)
             .toPromise()
             .then(function(response){ return response.json(); })
             .catch(this.handleError);
  }

  getHumidity() {
    return this.http.get(this.Host + '/api/humidity/' + this.uuid)
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getHeartRate() {
    return this.http.get(this.Host + '/api/heartRate/' + this.uuid)
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getSoup() {
    return this.http.get(this.Host + '/api/getsoup')
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getWeather() {
    return this.http.get(this.Host + '/api/getweather')
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
