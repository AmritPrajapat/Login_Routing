import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.scss'],
})
export class AdminDashbordComponent implements OnInit {
  name: string;
  userName: string;
  emp = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeservice: EmployeeService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((x) => {
      console.log(x);
      this.name = x.name;
      this.userName = x.userName;
    });
    this.getallData();
  }

  getallData() {
    this.emp = this._employeeservice.getEmployee();
  }

  deleteData(id) {
    this._employeeservice.deleteData(id);
    this.getallData();
  }
}
