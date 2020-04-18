import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private _employeeservice: EmployeeService,private _fb : FormBuilder) { }
  emp = [];
  ngOnInit(): void {
    this.emp = this._employeeservice.getEmployee();
  }

  registrationForm=this._fb.group({
    id : [''],
    firstName:[''],
    lastName:[''],
    userName:[''],
    password :['']  
  })


  SaveData()
  {

    this._employeeservice.saveData({
      id: this.registrationForm.value.id,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      userName: this.registrationForm.value.userName,
      password: this.registrationForm.value.password
    });
  console.log(this.registrationForm);
  }


}
