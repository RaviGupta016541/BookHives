import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { OrderServicesService } from '../order-services.service';

@Component({
  selector: 'app-order-show',
  templateUrl: './order-show.component.html',
  styleUrls: ['./order-show.component.css']
})
export class OrderShowComponent implements OnInit {

  public AllOrder=[] as any;
  public filteredOrder=[] as any;

  constructor(public orderData:OrderServicesService,public sharedData:BookService) {}

  activeUser=this.sharedData.userId;
  ngOnInit(): void {
    console.log("hi from show data")
    this.orderData.getOrder().subscribe(data=>this.AllOrder = data);
    console.log(this.AllOrder);
    //this.filterByUser(this.activeUser);
  }
  filterByUser(data:any){
    console.log(data)
    console.log("filtering..")
      // this.filteredOrder = this.AllOrder.filter((row:any) => {
      //   row.userId == data
      //   // console.log(row.userId);
      // });
      this.filteredOrder = this.AllOrder.filter((cat:any) => cat.userId == data)
    console.log(this.AllOrder)
    console.log(this.filteredOrder)
  }
  sh(){
     this.filterByUser(this.activeUser);
    console.log(this.AllOrder)
    console.log(this.filteredOrder)
  }
}
