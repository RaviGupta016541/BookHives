import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from "@angular/forms"
import { BookService } from '../book.service';
import { bookClass } from '../bookClass';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './books-dashboard.component.html',
  styleUrls: ['./books-dashboard.component.css']
})
export class BooksDashboardComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:BookService) {
  }
  formValue !: FormGroup;
  BookData :any;
  showAdd!:boolean;
  showUpdate!:boolean;
  booksModelobj:bookClass=new bookClass();
  isReadOnly=false;

    ngOnInit(): void {
      this.formValue=this.fb.group({
        bookName:["",Validators.required],
        bookDescription:["",Validators.required],
        bookPrice:["",Validators.required],
        bookImage:["",Validators.required],
        authorName:["",Validators.required],
        stockQuantity:["",Validators.required],
        categoryName:["",Validators.required],
        bookEdition:["",Validators.required],
        yearPublish:["",Validators.required],
        //createdDate:[""]
      })
      this.getAllBooks();
    }

    clickAddBooks()
    {
      this.isReadOnly=false;
      this.formValue.reset();
      this.showAdd=true;
      this.showUpdate=false;
    }
    postBooksDetails()
    {

      // this.isDisabled=false;
      this.booksModelobj.bookName=this.formValue.value.bookName;
      this.booksModelobj.bookDescription=this.formValue.value.bookDescription;
      this.booksModelobj.bookPrice=this.formValue.value.bookPrice;
      this.booksModelobj.bookImage=this.formValue.value.bookImage;
      this.booksModelobj.authorName=this.formValue.value.authorName;
      this.booksModelobj.stockQuantity=this.formValue.value.stockQuantity;
      this.booksModelobj.categoryName=this.formValue.value.categoryName;
      this.booksModelobj.bookEdition=this.formValue.value.bookEdition;
      this.booksModelobj.yearPublish=this.formValue.value.yearPublish;
      this.api.setBook(this.booksModelobj)
      .subscribe(res=>
        {
          console.log(res);
          alert("Book Added Successfully");
          let ref=document.getElementById("cancel")
          ref?.click();
          this.formValue.reset();
          this.getAllBooks();
        },
        err=>
        {
          alert("something went Wrong");
        })
    }

    getAllBooks()
    {
      this.api.getBooks()
      .subscribe(res=>{
        this.BookData=res;
        console.log(res);
      })
    }

    deleteBook(row:any)
    {
      this.api.deleteBook(row.bookId)
      .subscribe(res=>{
        alert("book Deleted");
        console.log();
        this.getAllBooks();
      })
    }

    onEdit(row:any)
    {
      this.isReadOnly=true;
      this.showAdd=false;
      this.showUpdate=true;
      this.booksModelobj.bookId=row.bookId;
      this.formValue.controls["bookName"].setValue(row.bookName);
      this.formValue.controls["bookDescription"].setValue(row.bookDescription);
      this.formValue.controls["bookPrice"].setValue(row.bookPrice);
      this.formValue.controls["bookImage"].setValue(row.bookImage);
      this.formValue.controls["authorName"].setValue(row.authorName);
      this.formValue.controls["stockQuantity"].setValue(row.stockQuantity);
      this.formValue.controls["categoryName"].setValue(row.categoryName);
      this.formValue.controls["bookEdition"].setValue(row.bookEdition);
      this.formValue.controls["yearPublish"].setValue(row.yearPublish);

      //this.formValue.controls["createdDate"].setValue(row.createdDate);

    }

    updateBooksDetails()
    {

      this.booksModelobj.bookName=this.formValue.value.bookName;
      this.booksModelobj.bookDescription=this.formValue.value.bookDescription;
      this.booksModelobj.bookPrice=this.formValue.value.bookPrice;
      this.booksModelobj.bookImage=this.formValue.value.bookImage;
      this.booksModelobj.authorName=this.formValue.value.authorName;
      this.booksModelobj.stockQuantity=this.formValue.value.stockQuantity;
      this.booksModelobj.categoryName=this.formValue.value.categoryName;
      this.booksModelobj.bookEdition=this.formValue.value.bookEdition;
      this.booksModelobj.yearPublish=this.formValue.value.yearPublish;
      this.booksModelobj.yearPublish=this.formValue.value.yearPublish;
     // this.booksModelobj.createdDate=this.formValue.value.createdDate;


      this.api.updateBook(this.booksModelobj,this.booksModelobj.bookId)
      .subscribe((res)=>
      {
        alert("Data Updated");
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllBooks();
      })

   }
}
