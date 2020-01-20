import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from './login';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterserviceService {

  constructor(private router:Router) { }
  tologin()
  {
    this.router.navigate(['login'])
  }

  torestaurant()
  {
    this.router.navigate(['restaurant'])
  }
  toregister() {
    this.router.navigate(['register'])
  }
  toview() {
    this.router.navigate(['view']);
  }
}
