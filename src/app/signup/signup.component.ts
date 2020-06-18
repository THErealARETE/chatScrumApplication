import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './Signup.Component.html',
  styles: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userTypes = ['regular user', 'project owner'];
}
