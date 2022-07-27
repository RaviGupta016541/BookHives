import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) { }




  registerForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpassword: new FormControl("")
  });
 repeatPass: string = 'none';


  ngOnInit(): void {
  }
  registerSubmitted(){
    if(this.password.value == this.Rpassword.value){
      console.log(this.registerForm.value)
      this.registerService.senddata(this.registerForm.value).subscribe();
      console.log("Submitted");
      alert("Your Account Created");
      this.repeatPass = 'none';
    }else{
      this.repeatPass = 'inline'
    }
  }

  get userName(): FormControl{
    return this.registerForm.get("userName") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }
  get Rpassword(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }
}
