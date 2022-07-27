import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { MycartService } from '../mycart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  public totalItem : number = 0;

  constructor(public req:BookService,private route:Router,public cartService:MycartService){}
  ngOnInit(): void {
  }
  ngOnIt(){

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.changeVar()
  }
  changeVar(){
    console.log("using init")
    console.log(this.req.isValidUser);
  }

  Logout(){
    this.req.isValidUser=false;
    this.req.userId=null;
  }
  EmpLogout(){
    this.req.isValidEmployee=false;
    this.route.navigate(['home']);
  }
}
