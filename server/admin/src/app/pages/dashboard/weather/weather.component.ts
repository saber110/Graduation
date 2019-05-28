import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  providers: [DataService],
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent {
  constructor(private dataService: DataService) {
    this.dataService.getWeather().then(data => {
      // console.log(data);
    })l
  }
}
