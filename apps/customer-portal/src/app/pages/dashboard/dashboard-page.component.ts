import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'glo-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
