import { Injectable } from '@angular/core';

import { Team } from '../models/team.model';
import { BaseService } from '../../core/services/base.service';
import { Observable } from 'rxjs';
import { TEAM } from '../team-constants';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseService<Team>{

  /**
   * Get team list of vleague
   */
  getTeamList(): Observable<Team[]>{
    return this.getList(TEAM.URL);
  }

  /**
   * Get team detail
   * @param id
   */
  getTeamDetail(id: number): Observable<Team[]>{
    return this.getItem(`${TEAM.URL}/${id}`);
  }

  /**
   * Search team for input search
   * @param keyword 
   */
  searchTeam(keyword: string) : Observable<Team[]> {
    return this.getItem(`${TEAM.URL}/?search=${keyword}`);
  }

  /**
   * Search team by input search
   * @param keyword 
   * @param teams 
   */
  searchTeams(keyword: string, teams: Team[]) {
    return teams.filter(team => (team.name.toLowerCase().includes(keyword.toLowerCase())));
  }
}
