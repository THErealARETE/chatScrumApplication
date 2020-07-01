import { Scrumuser } from './scrumuser';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) {}

  _url = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/'

  _loginurl = 'https://stageapi.chatscrum.com/scrum/api-token-auth/'

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  signup(user: Scrumuser){
    return this._http.post<any>(this._url, {'email': user['email'],'full_name': user['fullname'] , 'password':user['password'],
                'usertype': user['type'],'projname':user['projname']}, this.httpOptions)
  }

  login(user){
    return this._http.post<any>(this._loginurl, {'username': user['email'], 'password':user['password'],
                'project':user['projname']}, this.httpOptions)
  }
}
