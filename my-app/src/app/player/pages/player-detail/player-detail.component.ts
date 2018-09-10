import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Player } from '../../model/player.model';
import { PlayerService } from '../../sevices/player.service';
import { Router, NavigationStart, ActivatedRoute, Event, NavigationEnd, Data, ParamMap } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TEAM } from '../../../team/team-constants';
import { PLAYER } from '../../player-constants';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  action: string;
  playerForm: FormGroup;
  teamID: number;;
  playerID: number;
  urlAvatar: string = PLAYER.URL_DEFAULT_AVARTAR;

  constructor(
    private playerService: PlayerService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.router.events.pipe(
      filter((e: Event) => e instanceof NavigationEnd),
      map(() => {
        let route = this.activeRoute.firstChild;
        let child = route;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
            route = child;
          } else {
            child = null;
          }
        }
        return route;
      }),
      mergeMap(route => route.data),
    )
      .subscribe((data: Data) => this.action = data.title);
  }

  ngOnInit() {
    this.createForm();
    // Get teamID of team param from URL
    this.activeRoute.parent.paramMap.subscribe((params: ParamMap) => {
      this.teamID = Number(params.get('id'));
    });

    // Get playID of player param from URL
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.playerID = Number(params.get('id'));
    });

    if (this.action === 'edit') {
      this.showData(this.teamID, this.playerID);
    }
  }

  /**
   * Call service to get player from server
   * then set response data to form value if success
   * @param playerID
   */
  showData(teamID: number, playerID: number): void {
    this.playerService.getPlayer(teamID, playerID).subscribe(data => {
      if (data) {
        this.playerForm.patchValue(data);
        this.urlAvatar = data['avatar'];
      }
    });
  }

  /**
   * Handle event when user click on Submit button
   * @param player
   */
  onSubmit(player: Player): void {
    if (this.action === 'add') {
      // Create player
      this.onCreatePlayer(player);
    } else {
      // Update player
      this.onUpdatePlayer(player);
    }
  }

  /**
   * Add new player
   * @param player
   */
  onCreatePlayer(player: Player) {
    this.playerService.addPlayer(player, this.teamID).subscribe(data => {
      alert('add OK')
      this.router.navigate([`${TEAM.URL}/${this.teamID}`]);
    });
  }

  /**
   * Update inform player
   * @param player
   */
  onUpdatePlayer(player: Player) {
    this.playerService.updatePlayer(player, this.teamID, this.playerID).subscribe(res => {
      if (res) {
        alert('save succsess!');
        this.router.navigate([`${TEAM.URL}/${this.teamID}`]);
      }
    });
  }

  onCancel(){
    let confirmResult = confirm("Are you sure to cancel?");
    if(confirmResult) {
      this.router.navigate([`${TEAM.URL}/${this.teamID}`]);
    }
  }

  /**
   * Create player form by Form Builder
   * Set default value and built-in validators
   */
  createForm(): void {
    this.playerForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      position: [
        '',
        [
          Validators.required
        ]
      ],
      number: [
        '',
        Validators.required
      ],
      height: [
        '',
        Validators.required
      ],
      weight: [
        '',
        Validators.required
      ],
      birthday: [
        '',
        Validators.required
      ]
    });
  }
}
