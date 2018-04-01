/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  private uuid;

  // 从url字符串提取uuid
  //http://127.0.0.1:4200/#/pages/dashboard/UuidExample
  constructor(private analytics: AnalyticsService,
              private location: Location,) {
    var partten = "[^/]+(?!.*/)";
    var url = location.path().match(partten);
    // console.log(url[0]);
    this.uuid = url[0];
  }

  getUuid(){
    return this.uuid;
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}