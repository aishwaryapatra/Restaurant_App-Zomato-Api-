import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { restaurant } from './restaurant';
import {RegisterNew} from './RegisterNew';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantserviceService {

  constructor(private http: HttpClient) { }
  getcityname(name)
  {
    return this.http.get<Array<any>>(`https://developers.zomato.com/api/v2.1/cities?q=${name.city}`, {
      headers : new HttpHeaders().set('user-key', `8a1e8256411ce74e539053eb9f7d4494`)
    })
  }
  getCityId(id) :Observable<any>
   {
    // console.log(value.city);
    return this.http.get<Array<any>>(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`, {
      headers : new HttpHeaders().set('user-key', `8a1e8256411ce74e539053eb9f7d4494`)
    })
  }
  addres(res: restaurant): Observable<restaurant> {
   
    return this.http.post<restaurant>('http://localhost:3000/fav', res);
  }
  getNotes(username): Observable<Array<restaurant>> {
    return this.http.get<Array<restaurant>>(`http://localhost:3000/fav?username=${username}`);
  }
  getRes():Observable<any>{
    return this.http.get<Array<any>>(`http://localhost:3000/restaurants`);
  }
  
  
}
