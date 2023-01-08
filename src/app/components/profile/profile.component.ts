import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser = {username: '',mobile:'', email: '', password: ''};
  durationInSeconds: number = 5;
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('users') || '{}');
    console.log(this.currentUser);
    
  }

  editUser(){
    localStorage.setItem('users', JSON.stringify(this.currentUser));
    this._snackBar.open('ویرایش با موفقیت انجام شد','ok' , {
      duration: this.durationInSeconds * 1000,
      panelClass: ['success-snackbar']
    });
  }

  cancelMembership(){
    localStorage.removeItem('users');
    this.router.navigate(['signIn']);
  }
}
