import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { MycartService } from '../mycart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private bookvar:BookService,public cartService:MycartService,public route:Router) { }

  public bookDetails:[] | any;
  ngOnInit(): void {
    this.bookvar.getBook(this.bookvar.getDetailsId()).subscribe(data=> this.bookDetails=data);
  }

  addToCart(book:any){
    if(this.bookvar.isValidUser){
        this.cartService.addtoCart(book);
    }
    else{
      console.log("if user is not active.")
      alert("Please login first to add items in cart")
      this.route.navigate(['../Login'])
    }
  }

}
