import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TEAM } from '../../team-constants';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})

export class TeamListComponent {

  @Input() teams;

  constructor(
    private router: Router
  ) {}


  /**
   * Navigate to the Team
   * @param id
   */
  goToTeam(id: number) {
    this.router.navigate([`${TEAM.URL}/${id}`]);
  }
}
