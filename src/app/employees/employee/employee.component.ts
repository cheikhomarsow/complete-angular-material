import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  departments = [
    { id: 3, value: "Dep 3" },
    { id: 2, value: "Dep 2" },
    { id: 1, value: "Dep 1" },
  ]

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onClear() {
    this.employeeService.initializeFormGroup();
  }

}
