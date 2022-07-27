import { Component, OnInit } from '@angular/core';
import { MycartService } from '../mycart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(public cartService : MycartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  decrease(bookId:number){

    this.cartService.DecreaseQuantity(bookId);

    console.log(bookId)
  }
  increase(bookId:number){
    this.cartService.IncreaseQuantity(bookId);
  }

  }


