import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  private url: string='https://localhost:7026/api/OrderService';
  constructor(private http:HttpClient) {
   }

  public getOrder(){
    console.log("hi from order services");
    return this.http.get(this.url);
  }

   public setOrder(requestData: any){
    return this.http.post(this.url, requestData);
  }
  
   public deleteOrder(requestData: any){
    return this.http.delete(this.url+"/"+requestData);
  }
}
