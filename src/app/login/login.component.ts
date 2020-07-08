import { ScrumdataService } from './../scrumdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  scrumUserLoginData = {email: '', password: '', projname: ''}
  constructor(private _scrumdataService: ScrumdataService, private _router: Router){}

  ngOnInit(): void {
  }
    
  onLoginSubmit(){
    console.log(this.scrumUserLoginData);
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data =>{
        console.log('success', data),
        localStorage.setItem('token', data.token)
        this._router.navigate(['/scrumboard', data['project_id']])
      },
      error =>{
        console.log('error',error)
      }
    )
  }
}
