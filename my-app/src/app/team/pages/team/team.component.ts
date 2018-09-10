import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEAM } from '../../team-constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public keyword: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onKey(event: any){
    // get keyWord
    this.keyword = event.target.value

    // Navigate to team list 
    this.router.navigate([TEAM.URL], {queryParams: {key: this.keyword}});
  }
}
