import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from '../../models/team.model';
import { PLAYER } from '../../../player/player-constants';
import { TEAM } from '../../team-constants';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  public team: Team;
  public teamID: number;
  public keyword: string;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      this.teamID = Number(param.get('id'));
    });
    this.showTeamDetail(this.teamID);
  }

  showTeamDetail(teamID: number) {
    this.teamService.getTeamDetail(teamID).subscribe((res: any) => {
      this.team = res;
    })
  }

  addPlayer(){
    this.router.navigate([`${TEAM.URL}/${this.teamID}/${PLAYER.URL}/add`])
  }

  onKey(event: any){
    // Get keyword form input search
    this.keyword = event.target.value;

    // Navigate to player list
    this.router.navigate([`${TEAM.URL}/${this.teamID}`], {queryParams: {key: this.keyword}});
    
  }

}
