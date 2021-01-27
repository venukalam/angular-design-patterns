import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard.interface';
import { DASHBOARD } from '../dashboard.token';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
  providers: [
    {
      provide: DASHBOARD,
      useExisting: Dashboard1Component,
    },
  ],
})
export class Dashboard1Component implements Dashboard {
  rowsCount: number = 10;
  headers: any;
  dashboardData: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.configGrid();
  }

  load(filter1,filter2){
    console.log(filter1,filter2);
    this.dashboardData.push(
      { column1: "value1", column2: "value1", column3: "value1" },
      { column1: "value2", column2: "value2", column3: "value2" },
      { column1: "value3", column2: "value3", column3: "value3" },
      { column1: "value4", column2: "value4", column3: "value4" })
  }

  refresh(){
    this.dashboardData = [];
    this.dashboardData.push(
      { column1: "refresh1", column2: "refresh1", column3: "refresh1" },
      { column1: "refresh2", column2: "refresh2", column3: "refresh2" },
      { column1: "refresh3", column2: "refresh3", column3: "refresh3" },
      { column1: "refresh4", column2: "refresh4", column3: "refresh4" })
  }

  configGrid() {
    this.headers = [
      { field: 'column1', header: 'column1' },
      { field: 'column2', header: 'column2' },
      { field: 'column3', header: 'column3' },
      { field: 'column4', header: 'column4' },
      { field: 'column5', header: 'column5' }
    ];
  }
}
