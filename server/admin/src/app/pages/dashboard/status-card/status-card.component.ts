import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  providers: [DataService],
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="click()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  constructor(private dataService: DataService){}
  @Input() title: string;
  @Input() type: string;
  @Input() cmd: string;
  @Input() on = true;
  click(){
    this.on = !this.on;
    this.dataService.SetMotor(this.cmd);
  }
}
