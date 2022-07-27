import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public auth:RegisterService,public bookservice:BookService,private route:Router) { }
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ])
  });

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }

  onSubmit() {
      this.auth.authenticaion(this.loginForm.value).subscribe(
    (res: any)=>{
        if(res.status === 'Success'){
          this.bookservice.isValidUser=true;
          this.bookservice.userId=res.userId;
          alert('Login successful');
          this.route.navigate(['home'])
        }
        else{
          this.bookservice.isValidUser=false;
          alert('Login Unsuccessful');
        }
      }
    )
  }

}
