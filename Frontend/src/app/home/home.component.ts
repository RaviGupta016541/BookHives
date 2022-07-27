import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { MycartService } from '../mycart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public bookvar:BookService,private route:Router,private fb:FormBuilder,public cartService:MycartService) { }

  public title:string="All Books";
  detailsId:any;
  searchTerm:string="";
  public AllBooks=[] as any;
  public searchBooks=[] as any;

  public filteredList=[] as any;
  public SelectedCategory:string|any;
  public showFilterd=false;

  sendDetails(data:number){
    this.bookvar.setDetailsId(data);
  }



  addToCart(book:any){
    if(this.bookvar.isValidUser){
        this.cartService.addtoCart(book);
    }
    else{

      alert("Please login first to add items in cart")
      this.route.navigate(['../Login'])
    }
  }


  public selectCategotyForm:FormGroup | any;
  bookCategoryAvailable = [
    "action" ,
    "child" ,
    "business" ,
    "fiction",
    "HISTORY",
  ];

  // for search books
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    //To fetch all books
    this.bookvar.getBooks().subscribe(data=>this.AllBooks = data);
    console.log("array is ")
    this.selectCategotyForm = this.fb.group({
      book: [null]
    });
  }

  submit(data:any) {
    this.filterByCategory(data.book)
  }

  filterByCategory(data:any){
    if(data){
      this.bookvar.getBooks().subscribe(data=>this.AllBooks = data);
      this.filteredList = this.AllBooks.filter((cat:any) => cat.categoryName.trim().toLowerCase() == data.toLowerCase())
      this.showFilterd=true;
    }
}

}

