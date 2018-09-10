import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player.model';
import { PlayerService } from '../../sevices/player.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TEAM } from '../../../team/team-constants';
import { PLAYER } from '../../player-constants';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {

  public players: Player[];
  public teamID: number;
  public playerID: number;

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.teamID = Number(params.get('id'));
    });
    this.showPlayerList(this.teamID);
  }

  /**
   * Show player list follow teamID
   * @param teamID
   */
  showPlayerList(teamID: number) {
    this.playerService.getPlayerList(teamID).subscribe((res: any) => {
      this.players = res;
    })
  }

  /**
   * Navigate to home page
   */
  goHome() {
    this.router.navigate([`${TEAM.URL}`]);
  }

  /**
   * Show inform the player
   * @param playerID
   */
  showPlayer(playerID: number) {
    this.router.navigate([`${TEAM.URL}/${this.teamID}/${PLAYER.URL}/${playerID}`]);
  }

  /**
   * Navigate to player detail page
   * @param playerID
   */
  editPlayer(playerID: number) {
    this.router.navigate([`${TEAM.URL}/${this.teamID}/${PLAYER.URL}/${playerID}/edit`]);
  }

  /**
   * Delete the player
   * @param playerID
   */
  deletePlayer(playerID: number) {
    let confirmDelete = confirm("Are you sure to delete this player");
    if (confirmDelete) {
      this.playerService.detelePlayer(this.teamID, playerID).subscribe((res: any) => {
        this.showPlayerList(this.teamID);
      })
    }
  }
}
