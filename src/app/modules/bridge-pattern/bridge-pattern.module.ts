import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridgePatternRoutingModule } from './bridge-pattern-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { BridgeComponent } from './bridge/bridge.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WrapperComponent, Dashboard1Component, Dashboard2Component, BridgeComponent],
  imports: [
    CommonModule,
    BridgePatternRoutingModule,
    TableModule
  ]
})
export class BridgePatternModule { }
