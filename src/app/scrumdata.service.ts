import { Scrumuser } from './scrumuser';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) {}

  _url = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/'

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  signup(user: Scrumuser){
    return this._http.post<any>(this._url, {'email': user['email'],'full_name': user['fullname'] , 'password':user['password'],
                'usertype': user['type'],'projname':user['projname']}, this.httpOptions)
  }
}
