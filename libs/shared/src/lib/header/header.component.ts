import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'glo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() toggleSitebar: EventEmitter<any> =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSiteBar() {
    this.toggleSitebar.emit();
  }

}
