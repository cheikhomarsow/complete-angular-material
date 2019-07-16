import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  onClear() {
    this.employeeService.initializeFormGroup();
  }

  onSubmit() {
    if(this.employeeService.form.valid) {
      this.employeeService.insertEmployee(this.employeeService.form.value);
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
    }
  }

}
