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

  showPlayerList(teamID: number) {
    this.playerService.getPlayerList(teamID).subscribe((res: any) => {
      this.players = res;
    })
  }

  goHome() {
    this.router.navigate([`${TEAM.URL}`]);
  }

  showPlayer(playerID: number){
    this.router.navigate([`${TEAM.URL}/${this.teamID}/${PLAYER.URL}/${playerID}`]);
  }

  editPlayer(playerID: number){
    this.router.navigate([`${TEAM.URL}/${this.teamID}/${PLAYER.URL}/${playerID}/edit`]);
  }

}
