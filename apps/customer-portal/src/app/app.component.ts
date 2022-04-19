import { Component } from '@angular/core';

@Component({
  selector: 'glow-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  siteBarOpened = true;

  constructor() {

  }

  onSitebarToggle() {
    this.siteBarOpened = !this.siteBarOpened;
  }
}
