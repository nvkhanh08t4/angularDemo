import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';
import { PLAYER } from './../player-constants';
import { TEAM } from './../../team/team-constants'

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends BaseService<Player> {

  getPlayerList(id: number): Observable<Player[]> {
    return this.getList(`${TEAM.URL}/${id}/${PLAYER.URL}`)
  }

  /**
   * Update Player
   * @param team 
   * @param id 
   */
  updatePlayer(player: Player, teamID: number, playerID: number): Observable<Player> {
    return this.put(`${TEAM.URL}/${teamID}/${PLAYER.URL}/${playerID}`, player);
  }

  getPlayer(teamID:number, playerID: number): Observable<Player[]> {
    return this.getItem(`${TEAM.URL}/${teamID}/${PLAYER.URL}/${playerID}`);
  }
}
