import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {
   }
   
   public getdata(){
    return this.http.get('https://localhost:7026/api/UsersService')
   }

   public senddata(data:any){
    console.log(data)
    return this.http.post('https://localhost:7026/api/UsersService',data);
   }

   public authenticaion(data:any){
    JSON.stringify(data);
    console.log(data);
    return this.http.post('https://localhost:7026/api/UsersService/LoginUser',data);
   }

   public authenticaionEmployee(data:any){
    JSON.stringify(data);
    console.log(data);
    return this.http.post('https://localhost:7026/api/EmployeeService/LoginEmployee',data);
   }

}
