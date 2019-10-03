import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onFormSubmit(formValue) {
    const team1PlayersList: any[] = this.getTeamPlayers(formValue, 1);
    const team2PlayersList: any[] = this.getTeamPlayers(formValue, 2);

    if (team1PlayersList.length === 2 && team2PlayersList.length === 2) {
      alert(`${team1PlayersList[0].name} & ${team1PlayersList[1].name} VS ${team2PlayersList[0].name} & ${team2PlayersList[1].name}`);
    } else {
      alert('Some of the teams have not at least 2 players');
    }
  }

  private getTeamPlayers(formValue: any, team: number) {
    return Object.values(formValue).filter((player) => player['team'] == team);
  }
}
