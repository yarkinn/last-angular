import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-remove-employee',
  templateUrl: './remove-employee.component.html',
  styleUrls: ['./remove-employee.component.css']
})
export class RemoveEmployeeComponent {
  employee:Employee;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private employeeService: EmployeeService){
          this.employee = new Employee();
        }
  onSubmit(){
    this.employeeService.delete(this.employee.id).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/employees']);
  }
}
