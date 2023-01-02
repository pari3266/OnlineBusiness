import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 
  signUpForm!: FormGroup;
  showPass = true;
  userFocus = true;
  passFocus= true;
  username : string = '';
  password: string = '';
  email: string = '';
  mobile: string = '';
  user : User = new User();
  durationInSeconds: number = 5;
  users : User[] = [];
  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,) { 

  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      mobile: ['', [
        Validators.required,
        Validators.email
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern(/^[a-z.A-Z_][a-z.A-Z0-9_]*$/),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]]
    });

    console.log(this.signUpForm.controls['email']);
    
  }

  get f() {
    return this.signUpForm.controls;
  }

  submit(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.mobile = this.mobile;

    this.users.push(this.user);
    console.log(this.users);
    // how to push users and save previous users
    for(let user of this.users){
      localStorage.setItem('users', JSON.stringify(user))
    }
    this._snackBar.open('ثبت نام با موفقیت انجام شد','ok' , {
      duration: this.durationInSeconds * 1000,
    });
// also dont register with same mobile
    // this.users.push({username: '', password: '', email: ''});
    // for(let u of this.users){
    //   if(u.username != this.username && u.email != this.email){
    //     this.users.push(this.user);
    //     console.log(this.users);
    //     this._snackBar.open('ثبت نام با موفقیت انجام شد','ok' , {
    //       duration: this.durationInSeconds * 1000,
    //     });
    //   }
      // else if(u.username == this.username){
      //   this._snackBar.open('نام کاربری تکراری می باشد','error' , {
      //     duration: this.durationInSeconds * 1000,
      //   });
      // }else if(u.email == this.email){
      //   this._snackBar.open('با این ایمیل قبلا ثبت نام انجام شده است','error' , {
      //     duration: this.durationInSeconds * 1000,
      //   });
      // }
    // }
  }

}
