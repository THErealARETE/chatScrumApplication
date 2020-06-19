import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styles: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userTypes = ['regular user', 'project owner'];
}


// templateUrl: './Signup.Component.html',