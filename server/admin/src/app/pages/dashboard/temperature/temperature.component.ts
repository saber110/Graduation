import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  providers: [DataService],
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  private alive = true;

  // temperatureData: Temperature;
  // temperature: number;
  // temperatureOff = false;
  // temperatureMode = 'cool';
  //
  // humidityData: Temperature;
  // humidity: number;
  // humidityOff = false;
  // humidityMode = 'heat';
  temperature = 20;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private temperatureHumidityService: TemperatureHumidityData,
              private dataService: DataService) {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnInit(): void {
  this.dataService.getTemperature().then(data => {
    this.temperature = data[0]['Temperature'];
  });
  this.dataService.getHumidity().then(data => {
    this.humidity = data[0]['Humidity'];
  });
}

  ngOnDestroy() {
    this.alive = false;
  }
}
