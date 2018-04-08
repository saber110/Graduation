import { Component, OnDestroy,OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataService } from '../data.service';
@Component({
  providers: [DataService],
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  temperature = 20;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private dataService: DataService) {
                this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
                this.colors = config.variables;
    });
  }

  ngOnInit(): void {
    this.dataService.getTemperature().then(data => {
      console.log(data[0]['Temperature']);
      this.temperature = data[0]['Temperature'];
    });
    this.dataService.getHumidity().then(data => {
      console.log(data[0]['Humidity']);
      this.humidity = data[0]['Humidity'];
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
