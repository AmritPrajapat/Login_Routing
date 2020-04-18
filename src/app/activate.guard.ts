import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate,OnInit {
constructor(private _employeeservice: EmployeeService,private activatedRouted: ActivatedRoute,
  private router: Router)
{}
userName: any;
  ngOnInit(): void {
  // this.activatedRouted.queryParams.subscribe(x => {
  //   this.userName = x.userName;
  // });
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
  //   const emp = this._employeeservice.getEmployee().filter(x => x.userName === this.userName);
  //  if(this.userName! = null && emp!=null){
  //     return true;
  //  } else {
  //    this.router.navigate(['/login']);
     return false;
   }
  }
  
//}
