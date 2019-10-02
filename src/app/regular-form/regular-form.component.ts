import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regular-form',
  templateUrl: './regular-form.component.html',
  styleUrls: ['./regular-form.component.scss']
})
export class RegularFormComponent implements OnInit {
  public form: FormGroup;
  // A bit tricky, but useful for our example
  public players: number[] = [1, 2, 3, 4];

  ngOnInit() {
    this.form = new FormGroup({
      player1: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        team: new FormControl()
      }),
      player2: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        team: new FormControl()
      }),
      player3: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        team: new FormControl()
      }),
      player4: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        team: new FormControl()
      })
    });
  }

  public onFormSubmit() {
    const team1PlayersList: any[] = this.getTeamPlayers(1);
    const team2PlayersList: any[] = this.getTeamPlayers(2);

    if (team1PlayersList.length === 2 && team2PlayersList.length === 2) {
      alert(`${team1PlayersList[0].name} & ${team1PlayersList[1].name} VS ${team2PlayersList[0].name} & ${team2PlayersList[1].name}`);
    } else {
      alert('Some of the teams have not at least 2 players');
    }
  }

  private getTeamPlayers(team: number) {
    return Object.values(this.form.value).filter((player) => player['team'] == team);
  }
}
