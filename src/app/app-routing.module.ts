import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualmachinesComponent } from './virtualmachines/virtualmachines.component';
import { AddvmComponent } from './addvm/addvm.component';
const routes: Routes = [
  {path:'vms', component:VirtualmachinesComponent},
  {path:'addvm', component:AddvmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
