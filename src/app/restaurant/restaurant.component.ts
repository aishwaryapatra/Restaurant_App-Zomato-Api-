import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantserviceService } from '../restaurantservice.service';
import { restaurant } from '../restaurant';
import { RouterserviceService } from '../routerservice.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantSearch: FormGroup;
  city: FormControl;
  stringdata: string;
  i: number;
  id: number;
  idpass: number;
  restobj: Array<any> = [];
  restobj5: Array<any> = [];
  restobj1 = new restaurant();
  //restobj5=new restaurant();
  arr: Array<any> = [];
  arr5: Array<any> = [];
  arr2: Array<any> = [];
  arr3: Array<any> = [];
  arr6: Array<any> = [];
  //arr3:Array<restobj1>[];
  name: string;
  featured_image: string;
  rid: number;
  username: string;
  flag:boolean=false;
  flag1:boolean=false;
  constructor(private restService: RestaurantserviceService, private routerservice: RouterserviceService) { }

  ngOnInit() {
    if (sessionStorage.getItem("key") !== null) {
    this.flag1=true;
    }
    this.city = new FormControl('', Validators.required)
    this.restaurantSearch = new FormGroup({
      city: this.city

    });
    if(sessionStorage.getItem("key")!=null) {
       this.flag=true;
    }
  }
  viewfav() {
    this.routerservice.toview();
    
  }
  addtofav(id) {
    if (sessionStorage.getItem("key") !== null) {
      console.log(id);
    
      this.rid = this.arr2.findIndex(ep => ep.res_id === id);
      console.log(this.rid);
      this.restobj1.res_id = this.arr2[this.rid].res_id;
      this.restobj1.name = this.arr2[this.rid].name;
      this.restobj1.featured_image = this.arr2[this.rid].featured_image;
      this.restobj1.username = sessionStorage.getItem("key");
      //console.log(this.restobj1);
      //console.log(this.restobj1.res_id);
      this.restService.addres(this.restobj1).subscribe((data) => {
        //console.log(data);

      },
        error => {
          console.log(error);
        });
        this.routerservice.toview();

    }
    else {
      this.routerservice.tologin();
    }
  }
  search1() {
    this.flag=true;
    
    console.log(this.restaurantSearch.value);
    this.restService.getcityname(this.restaurantSearch.value).subscribe(
      data => {


        console.log(data);
        console.log(data['location_suggestions'][0]['id']);

        this.id = data['location_suggestions'][0]['id'];
        this.search(this.id);

      },
      error => {
        console.log(error);
      }
    );

  }


  search(id) {
    
    
    console.log(this.restaurantSearch.value);
    this.idpass = id;
    this.restService.getCityId(this.idpass).subscribe(
      data => {

        this.restobj = data;
        console.log(data);

        for (this.i = 0; this.i < 20; this.i++) {


          this.arr['name'] = this.restobj['restaurants'][this.i]['restaurant']['name'];
          this.arr['featured_image'] = this.restobj['restaurants'][this.i]['restaurant']['featured_image'];
          this.arr['res_id'] = this.restobj['restaurants'][this.i]['restaurant']['id'];

          this.arr2.push(this.arr);
          this.arr = [];


        }
        console.log(this.arr2);



      },
      error => {
        console.log(error);
      }
    );

  }
  logIn() {
    this.routerservice.tologin();
  }
  register() {
    this.routerservice.toregister();
  }
  logout() {
    sessionStorage.clear();
    this.routerservice.tologin();
    
  }
}
