import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
//---

subject = new Subject<boolean>();

//---

  filteredArrayLength:number|any;
  detailsId:string|any;
  userId:number | any;
  isValidUser:boolean=false;
  isValidEmployee:boolean=false;

  setDetailsId(data: any){
    this.detailsId=data;
  }
  getDetailsId(){
    return this.detailsId;
  }

  private url: string='https://localhost:7026/api/BooksService';
  constructor(private http:HttpClient) {
   }
  public getBooks(){
    console.log("hi from services");
    return this.http.get(this.url);
  }
   public getBook(requestData: any){
    return this.http.get(this.url+"/"+requestData);
  }
   public setBook(requestData: any){
    return this.http.post(this.url, requestData);
  }
   public deleteBook(requestData: any){
    return this.http.delete(this.url+"/"+requestData);
  }
  public updateBook(Data:any,id:any) {
    return this.http.put(this.url+"/"+id,Data);
  }

  private url2: string="https://localhost:7026/api/uploadFileService";
  public getPhoto(requestData: string):Observable<Blob>{
    return this.http.get(this.url2+'/'+requestData,{responseType:"blob"});
  }
  public setPhoto(requestData: any){
    return this.http.post(this.url2, requestData);
  }


  PostMessage(input: any) {
    return this.http.post("https://localhost:7026/api/ContactUsService", input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }


  

}
