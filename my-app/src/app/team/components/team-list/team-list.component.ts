import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})

export class TeamListComponent implements OnInit {
  public teams: Team[];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.teamService.getTeamList().subscribe((res: any) => {
      this.teams = res;
    });
  }

  goToTeam(id: number) {
    this.router.navigate([`/team/${id}`])
  }
}
