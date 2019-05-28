import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataService } from '../data.service';


@Component({
  providers: [DataService],
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;
  picture = 'url("assets/images/kitten-{{currentTheme}}.png")';
  note = '这是一个测试消息';
  title = '每日一句';
  content = '这是一个测试消息';
  constructor(private themeService: NbThemeService,
              private dataService: DataService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.dataService.getSoup().then(data => {
        // console.log(data);
        this.content = data.content;
        this.picture = data.fenxiang_img;
        this.note = data.note;
      });
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
