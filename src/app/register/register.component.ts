import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { RegisterNew } from '../RegisterNew';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  name: FormControl;
  password: FormControl;
  submitMessage: string;
  errMessage:string;
  r:RegisterNew=new RegisterNew();
  r_array:Array<RegisterNew>= [];


  constructor(private authservice:AuthenticationserviceService,private routerservice:RouterserviceService) { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required),
      this.password = new FormControl('', Validators.required)
    this.registerform = new FormGroup({
      username: this.name,
      password: this.password

    });
  }
  submit() {
    console.log(this.registerform.value);
  
   this.r.name = this.name.value;
    this.r.password=this.password.value;
    this.r_array.push(this.r); 
    console.log(this.r);
  this.authservice.addNote(this.r).subscribe(
    data=>{
          console.log(data);
         this.routerservice.tologin();
         
    },
    error=>
    {
      this.errMessage=error.message;
    }
  ); 

  }

}
