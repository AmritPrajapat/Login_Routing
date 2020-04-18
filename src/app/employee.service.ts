import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  empData = [
    {
      id: 101,
      firstName: 'Amrit',
      lastName: 'Prajapat',
      userName: 'amrit',
      password: 'amrit',
      role: 'admin'
    },
    {
      id: 102,
      firstName: 'Bunty',
      lastName: 'Prajapat',
      userName: 'bunty',
      password: 'bunty',
      role: 'user'
    },
    {
      id: 103,
      firstName: 'Rohan',
      lastName: 'Prajapat',
      userName: 'rohan',
      password: 'rohan',
      role:'user'
    },
  ];
  getEmployee() {
    return this.empData;
  }

  saveData(obj: any) {
    this.empData.push(obj);
  } 

  deleteData(id: any) {
    this.empData = this.empData.filter(x => x.id !== id); // splice, unshift, removeAt
  }
}
