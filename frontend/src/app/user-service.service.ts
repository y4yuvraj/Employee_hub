import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from './user';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _addUserUrl="http://localhost:8001/addUser";
  _getUsersUrl="http://localhost:8001/users";
  constructor(private _http:HttpClient) {

   }

   addUser(_user:User)
   {
    return this._http.post<any>(this._addUserUrl,_user);
   }

   getUsers()
   {
    return this._http.get<any>(this._getUsersUrl).pipe(map((res:any)=>{
      return res;
    }))
   }

   updateUser(data:any,id:number)
   {
    return this._http.put<any>("http://localhost:8001/updateUser",data).pipe(map((res:any)=>{
      // console.log(res)
      return res;
    }))
   }

   deleteUser(id:number)
   {
    return this._http.delete<any>("http://localhost:8001/user/"+id).pipe(map((res:any)=>{
      return res;
    }))
   }
}
