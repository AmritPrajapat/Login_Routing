import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  name: string;
  emp = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeservice: EmployeeService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((x) => {
      console.log(x);
      this.name = x.name;
    });
    this.getallData();
  }

  getallData() {
    this.emp = this._employeeservice.getEmployee();
  }
}
