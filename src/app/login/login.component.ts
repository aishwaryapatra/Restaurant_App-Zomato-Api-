import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;
  submitMessage: string;
  
  

  constructor(private authservice:AuthenticationserviceService,private routerservice:RouterserviceService) { }

  ngOnInit() {
    if (sessionStorage.getItem("key") !== null) {
      this.routerservice.torestaurant();
    }
    this.username = new FormControl('', Validators.required),
      this.password = new FormControl('', Validators.required)
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password

    });
  }
  loginSubmit() {
    
    console.log(this.loginform.value);
    this.authservice.getusers(this.loginform.value).subscribe((data)=>{
      console.log(data.length);
    })
    sessionStorage.setItem('key',this.loginform.value.username);
    this.routerservice.torestaurant();
  }
  newLogin() {
    this.routerservice.toregister();
  }
  logout() {
    sessionStorage.clear();
    this.routerservice.tologin();
    if(sessionStorage.getItem("key")==null) {
      this.submitMessage="logged out";
    }
  }
  tohome() {
    this.routerservice.torestaurant()
  }
}
