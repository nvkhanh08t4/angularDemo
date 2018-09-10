import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Team } from '../../models/team.model';
import { TeamService } from '../../services/team.service';
import { TEAM } from '../../team-constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})

export class TeamListComponent implements OnInit {
  public teams: Team[];
  public keyword: string;
  public subcription: Subscription;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeams();
    // this.teamService.getTeamList().subscribe((res: any) => {
    //   this.teams = res;
    // });
  }

  goToTeam(id: number) {
    this.router.navigate([`${TEAM.URL}/${id}`])
  }

  getTeams() {
    this.subcription = this.activeRoute.queryParams.subscribe((params: any) => {
      if (params) {
        // Get keyword form parammeter
        this.keyword = params['key'];
      }

      // Get team list
      this.teamService.getTeamList().subscribe((res: any) => {
        if (res) {
          // get teams follow input search
          if (this.keyword && this.keyword.trim().length) {
            this.teams = this.teamService.searchTeams(this.keyword.trim(), res)
          } else {
            this.teams = res;
          }
        }
      })
    })
  }
}
