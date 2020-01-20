import { Component, OnInit } from '@angular/core';
import { RestaurantserviceService } from '../restaurantservice.service';
import { RouterserviceService } from '../routerservice.service';
import { restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
  photos_url: string;
  rid: number;
  username: string;
  flag: boolean = false;
  r_array: Array<restaurant> = [];
  r: restaurant = new restaurant();

  constructor(private restService: RestaurantserviceService, private routerservice: RouterserviceService,
    private authService: AuthenticationserviceService) { }

  ngOnInit() {
    console.log("called view fav");
    if (sessionStorage.getItem("key") !== null) {
      this.username = sessionStorage.getItem("key");
      console.log(this.username);
      this.restService.getNotes(this.username).subscribe(
        data => {
          this.restobj5 = data;
          console.log(data);
          console.log(this.restobj5);
          console.log(data.length);
          for (this.i = 0; this.i < data.length; this.i++) {


            this.arr5['name'] = this.restobj5[this.i]['name'];
            //console.log(this.arr5['name']);
            this.arr5['featured_image'] = this.restobj5[this.i]['featured_image'];
            this.arr5['res_id'] = this.restobj5[this.i]['id'];

            this.arr6.push(this.arr5);
            console.log("array6");
            console.log(this.arr6);
            this.arr5 = [];
          }
        },
        error => {
          console.log(error);

        }
      );
    }

    else {
      this.routerservice.tologin();
    }

  }
  // delete(note) {
  //   this.authService.delete(note.id).subscribe();
  //    this.r = new restaurant();
  //    this.del(note.id);
  //  }
  del(delid) {
    //  var element = this.r_array.findIndex(a => a.id === delid);
    //  if (element > -1)
    //    this.r_array.splice(element, 1);
    //  else
    //    console.log("Invalid Id no");
    this.authService.delete(delid).subscribe(
      data => {
        console.log(data);
      }
    );

  }

}
