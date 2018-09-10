import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseService } from '../../core/services/base.service';
import { Player } from '../model/player.model';
import { PLAYER } from './../player-constants';
import { TEAM } from './../../team/team-constants'

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends BaseService<Player> {

  /**
   * Get player list
   * @param id
   */
  getPlayerList(id: number): Observable<Player[]> {
    return this.getList(`${TEAM.URL}/${id}/${PLAYER.URL}`)
  }

  /**
   * update inform player
   * @param player
   * @param teamID
   * @param playerID
   */
  updatePlayer(player: Player, teamID: number, playerID: number): Observable<Player> {
    return this.put(`${TEAM.URL}/${teamID}/${PLAYER.URL}/${playerID}`, player);
  }

  /**
   * Show inform player
   * @param teamID
   * @param playerID
   */
  getPlayer(teamID: number, playerID: number): Observable<Player[]> {
    return this.getItem(`${TEAM.URL}/${teamID}/${PLAYER.URL}/${playerID}`);
  }

  /**
   * Add new player
   * @param player
   * @param teamID
   */
  addPlayer(player: Player, teamID: number): Observable<Player> {
    return this.post(`${TEAM.URL}/${teamID}/${PLAYER.URL}`, player);
  }

  /**
   * Delete the player
   * @param teamID
   * @param playerID
   */
  detelePlayer(teamID: number, playerID: number): Observable<{}> {
    return this.delete(`${TEAM.URL}/${teamID}/${PLAYER.URL}/${playerID}`)
  }
}
