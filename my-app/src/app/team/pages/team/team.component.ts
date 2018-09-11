import { Component, OnInit, OnDestroy } from '@angular/core';

// import third party library
import { Subscription } from 'rxjs';

import { TEAM } from '../../team-constants';
import { Team } from '../../models/team.model';
import { TeamService } from '../../services/team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],

})

export class TeamComponent implements OnInit, OnDestroy {
  public keyword: string;
  public teams: Team[];
  public subcription: Subscription;

  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.setTeams();
  }

  /**
   * Set team list
   */
  setTeams(): void {
    this.subcription = this.teamService.getTeamList().subscribe((res: Team[]) => {
      if (res) {
        if (this.keyword && this.keyword.trim().length) {
          this.teams = this.teamService.searchTeams(this.keyword.trim(), res);
        } else {
          this.teams = res;
        }
      }
    })
  }

  /**
   * Navigate to team list
   * @param event
   */
  onKey(event: any) {
    // get keyWord
    this.keyword = event.target.value

    this.setTeams();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
