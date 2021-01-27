import { Component, ContentChild, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard.interface';
import { DASHBOARD } from '../dashboard.token';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  @ContentChild(DASHBOARD as any, { static: true })
  dashboard: Dashboard;

  constructor() { }

  ngOnInit() {
  }

  load(filter1,filter2) {
    this.dashboard.load(filter1,filter2);
  }

  onRefresh() {
    this.dashboard.refresh();
  }
}
