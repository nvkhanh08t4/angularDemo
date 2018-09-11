import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player.model';
import { PlayerService } from '../../sevices/player.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TEAM } from '../../../team/team-constants';
import { PLAYER } from '../../player-constants';
import { Subscription } from 'rxjs';

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
  public keyword: string;
  public subcription: Subscription;
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Are you sure delete this player?';

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.teamID = Number(params.get('id'));
    });
    this.showPlayerList(this.teamID);
  }

  /**
   * Show player list follow teamID
   * @param teamID
   */
  showPlayerList(teamID: number) {
    this.subcription = this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params) {
        this.keyword = params['key'];
      }

      // Get player list
      this.playerService.getPlayerList(teamID).subscribe((res: any) => {
        if (res) {
          // Get player follow input search
          if (this.keyword && this.keyword.trim().length) {
            this.players = this.playerService.searchPlayers(this.keyword.trim(), res)
          } else {
            this.players = res;
          }
        }
      })
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
   * Get ID player will be deleted
   * @param id
   */
  deleteID(id: number) {
    this.playerID = id;
  }

  /**
   * Handel click confirm button
   */
  clickConfirm() {
    this.deletePlayer(this.playerID);
  }

  /**
   * Delete the player
   * @param playerID
   */
  deletePlayer(playerID: number) {
    this.playerService.detelePlayer(this.teamID, playerID).subscribe((res: any) => {
      this.showPlayerList(this.teamID);
    })
  }
}
