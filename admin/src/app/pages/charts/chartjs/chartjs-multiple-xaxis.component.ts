import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataService } from '../../dashboard/data.service';

@Component({
  providers: [DataService],
  selector: 'ngx-chartjs-multiple-xaxis',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsMultipleXaxisComponent implements OnDestroy {
  data: {};
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private dataService: DataService) {

    this.dataService.getHeartRate().then(data => {
      console.log(data);
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;

        this.data = {
          labels: [1,2,3,4,5,6,7,8,9,10],
          datasets: [{
            label: '心率',
            data: [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0],data[5][0],data[6][0],data[7][0], data[8][0], data[9][0]],
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          }, {
            label: '血痒饱和度',
            data: [data[0][1], data[1][1], data[2][1], data[3][1], data[4][1],data[5][1],data[6][1],data[7][1], data[8][1], data[9][1]],
            borderColor: colors.success,
            backgroundColor: colors.success,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          }],
        };

        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
            labels: {
              fontColor: chartjs.textColor,
            },
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Month',
                },
                gridLines: {
                  display: true,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Value',
                },
                gridLines: {
                  display: true,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
          },
        };
      });
    });

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
