import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private uuid = 'UuidExample';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTemperature() {
    return this.http.get('/api/temperature/' + this.uuid)
             .toPromise()
             .then(function(response){ return response.json(); })
             .catch(this.handleError);
  }

  getHumidity() {
    return this.http.get('/api/humidity/' + this.uuid)
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getHeartRate() {
    return this.http.get('/api/heartRate/' + this.uuid)
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getSoup() {
    return this.http.get('/api/getsoup')
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  getWeather() {
    return this.http.get('/api/getweather')
             .toPromise()
             .then(function(response){return response.json(); })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
