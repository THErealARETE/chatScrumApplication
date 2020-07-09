import { ScrumdataService } from './scrumdata.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _scrumdataService : ScrumdataService, private _router: Router ){}
  
  canActivate(): boolean {
    if (this._scrumdataService.loggedIn()){
      return true
    }else {
      this._router.navigate(['/signup'])
      return false
    }
  }
}
