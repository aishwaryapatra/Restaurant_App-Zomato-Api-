import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from './login';
import { RegisterNew } from './RegisterNew';
import {restaurant} from './restaurant';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor(private httpClient: HttpClient) { }

  getusers(user): Observable<Array<RegisterNew>> {
    console.log("GET Students ");
    return this.httpClient.get<Array<RegisterNew>>(`http://localhost:3000/register?name=${user.name}&password=${user.password}`);
  }
  addNote(r: RegisterNew): Observable<RegisterNew> {
    return this.httpClient.post<RegisterNew>('http://localhost:3000/register',r);
}
delete(id): Observable<restaurant>{
  console.log("in delete service");
  return this.httpClient.delete<restaurant>(`http://localhost:3000/fav/`+id);
}
}
