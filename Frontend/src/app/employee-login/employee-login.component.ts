import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(public auth:RegisterService,public bookservice:BookService,private route:Router) { }
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    employeeEmail: new FormControl("", [Validators.required, Validators.email]),
    employeePassword: new FormControl("", [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ])
  });

  get Email(): FormControl{
    return this.loginForm.get("employeeEmail") as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get("employeePassword") as FormControl;
  }

  onSubmit() {
      this.auth.authenticaionEmployee(this.loginForm.value).subscribe(
    (res: any)=>{
        if(res.status === 'Success'){
          this.bookservice.isValidEmployee=true;

          alert('Employee Login successful');
          this.route.navigate(['dashboard'])
        }
        else{
          alert('You are not a valid Employee.');
        }
      }
    )
  }

}
