import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { MycartService } from '../mycart.service';
import { OrderServicesService } from '../order-services.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  title = 'pro';
  constructor(private http:HttpClient,public route:Router,public cart:MycartService, public order:OrderServicesService, public sharedData:BookService){}

 contactForm = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  address: new FormControl('',Validators.required),

  country: new FormControl(),
  zipcode: new FormControl(),
  city: new FormControl(),
  state: new FormControl(),
})
countryList: country[] = [
  new country("1", "India"),
  new country ('2', 'USA'),
  new country('3', 'England')
];

// log/print data that was received from form into console
onSubmit(data: any)
{

  this.http.post('url',data)
  .subscribe((result)=>{
    console.warn("result",result)
    alert("Added to Database sucessfully!")
  })
  console.log(this.contactForm.value);
}


public checkOut(){

  console.log(this.cart.cartItemList)
  // const uid=this.shareData.userId;
  const uid=this.sharedData.userId;
  let myprop = this.cart.cartItemList.filter(function (props:any) {
    delete props.bookDescription;
    delete props.authorName;
    delete props.stockQuantity;
    delete props.categoryName;
    delete props.bookEdition;
    delete props.yearPublish;
    delete props.bookId;
    delete props.createdDate;
    props['userId']=uid;
    return true;
});

console.log("myprop is");
console.log(myprop);
for(let i=0;i<this.cart.cartItemList.length;i++){

  this.order.setOrder(this.cart.cartItemList[i]).subscribe();
 // this.order.setOrder()
}
console.log("done")



  this.route.navigate(['order'])

  this.cart.removeAllCart();
}
}





export class country {
id:string;
name:string;

constructor(id:string, name:string) {
 this.id=id;
 this.name=name;
}



}
