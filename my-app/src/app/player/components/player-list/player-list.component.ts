import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player.model';
import { PlayerService } from '../../sevices/player.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {

  public players: Player[];
  public id: number;

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
    this.showPlayerList(this.id);
  }

  showPlayerList(id: number) {
    this.playerService.getPlayerList(id).subscribe((res: any) => {
      this.players = res;
      console.log(this.players);
    })
  }

  goHome() {
    this.router.navigate(['/team'])
  }

  goToPlayer(id: number){
    this.router.navigate([`/team/${id}/player`]);
  }

}
