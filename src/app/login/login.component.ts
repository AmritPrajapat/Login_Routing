import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _employeeservice: EmployeeService,
    private _fb: FormBuilder,
    private router : Router
  ) {}
  emp = [];
  ngOnInit(): void {
    this.emp = this._employeeservice.getEmployee();
  }

  registrationForm = this._fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    userName: [''],
    password: [''],
  });

  SaveData() {
    this._employeeservice.saveData({
      userName: this.registrationForm.value.userName,
      password: this.registrationForm.value.password,
    });
    console.log(this.registrationForm);

    /*
this.router.navigate(['items'], { relativeTo: this.route });*/
  }

  LoginData(registrationForm) {
    let data = this._employeeservice.getEmployee();
    let isMatch = false;
    for(let d of data) {
      if(d.userName === registrationForm.value.userName && d.password=== registrationForm.value.password && d.role==='admin')
      {
        isMatch = true;
        this.router.navigate(['/adminpanel'], { queryParams: { 
          userName: registrationForm.value.userName,
          name: d.firstName
         }});
      }
      

      if(d.userName === registrationForm.value.userName && d.password=== registrationForm.value.password && d.role==='user')
      {
        isMatch = true;
        this.router.navigate(['/userpanel'], { queryParams: { 
          userName: registrationForm.value.userName,
          name: d.firstName
         }});
      }


    }
    if (!isMatch) {
      alert('Invalid Login Details');
    } 
  }
}
