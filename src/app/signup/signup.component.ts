import { ScrumdataService } from './../scrumdata.service';
import { Scrumuser } from './../scrumuser';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styles: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _ScrumdataService: ScrumdataService) { }

  ngOnInit(): void {
  }
  userTypes = ['regular user', 'project owner'];
  ScrumuserModel = new Scrumuser( '','','','','')

  onSubmit(){
    console.log(this.ScrumuserModel);
    this._ScrumdataService.signup(this.ScrumuserModel).subscribe(
      data =>console.log('success', data),
      error =>console.log('error', error)
    )
  }
}


// templateUrl: './Signup.Component.html',