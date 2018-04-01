import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by
    <b><a href="https://akveo.com" target="_blank">Huhaobin</a></b> 2017</span>
    <div class="socials">
      <p>中南大学</p>
    </div>
  `,
})
export class FooterComponent {
}
