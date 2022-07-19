import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent  {

  employee: Employee;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/employees']);
  }
}

