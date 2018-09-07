import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  public team: Team;
  public id: number;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
    });
    this.showTeamDetail(this.id);
  }

  showTeamDetail(id: number){
    this.teamService.getTeamDetail(id).subscribe((res: any)=> {
      this.team = res;
      console.log(this.team);
    })
  }

}
