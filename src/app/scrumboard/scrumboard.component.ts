import { ScrumdataService } from './../scrumdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _scrumDataService: ScrumdataService) { }

  project_id = 0

_participants = []

  ngOnInit() {
    this.project_id = parseInt((this._route.snapshot.paramMap.get('project_id')))
    this.getProjectGoals()
  }

  getProjectGoals(){
    this._scrumDataService.allProjectGoals(this.project_id).subscribe(
      data => {
        console.log(data);
        this._participants = data['data']
        console.log(this._participants);
        
      },
      error=>{
        console.log('error', error);
      }
    )
  }

}


