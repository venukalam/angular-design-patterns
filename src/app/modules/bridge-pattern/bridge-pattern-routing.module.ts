import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridgeComponent } from './bridge/bridge.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';


const routes: Routes = [
  { path: '', component: BridgeComponent },
  { path: 'wrapper', component: WrapperComponent },
  { path: 'dashboard1', component: Dashboard1Component },
  { path: 'dashboard2', component: Dashboard2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BridgePatternRoutingModule { }
