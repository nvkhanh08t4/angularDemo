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

  getTeamDetail(id: number): Observable<Team[]>{
    return this.getItem(`${TEAM.URL}/${id}`);
  }
}
