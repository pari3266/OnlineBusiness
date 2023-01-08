import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser = {username: '',mobile:'', email: '', password: ''};
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('users') || '{}');
    console.log(this.currentUser);
    
  }

  editUser(){
    localStorage.setItem('users', JSON.stringify(this.currentUser))
  }

  cancelMembership(){
    localStorage.removeItem('users');
    this.router.navigate(['signIn']);
  }
}
