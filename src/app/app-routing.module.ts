import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RemoveEmployeeComponent } from './remove-employee/remove-employee.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addemployee', component: EmployeeComponentComponent },
  { path: 'removeemployee', component: RemoveEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
