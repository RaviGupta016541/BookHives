import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public totalProducts=0;
  public overAllGrandTotal=0;


  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    product['quantity']=1;
    product['total']=product['quantity'] * product['bookPrice'];

    let canAdd=true;
    this.cartItemList.map((a:any)=>{
      if(product.bookId=== a.bookId){
        alert("Item is already in cart");
        canAdd=false;
      }
    })

    if(canAdd){
    this.cartItemList.push(product);
    this.totalProducts=this.cartItemList.length;
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
    console.log("tot")
    console.log(this.productList)
    console.log(this.totalProducts)
    }
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })

    this.overAllGrandTotal=grandTotal;
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.bookId=== a.bookId){
        this.cartItemList.splice(index,1);
      }
    })
    this.totalProducts=this.cartItemList.length;
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.totalProducts=this.cartItemList.length;

    this.productList.next(this.cartItemList);
  }
  IncreaseQuantity(bId:number){
    this.cartItemList.map((a:any)=>{

      if(bId==a.bookId){
        if(a.quantity<10)
        {

          a.quantity+=1;
          a.total=a.quantity * a.bookPrice;
          this.getTotalPrice();

        }
        else
        {
          alert("You can only buy upto 10 (units) of this books")
        }
      }
    }
    );
  }

  DecreaseQuantity(bId:number){
    this.cartItemList.map((a:any)=>{

      if(bId==a.bookId){
        if(a.quantity>1)
        a.quantity-=1;
        a.total=a.quantity * a.bookPrice;
        this.getTotalPrice();
      }
    }
    );
  }

}
