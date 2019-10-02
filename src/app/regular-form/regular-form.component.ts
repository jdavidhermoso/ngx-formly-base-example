import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regular-form',
  templateUrl: './regular-form.component.html',
  styleUrls: ['./regular-form.component.scss']
})
export class RegularFormComponent implements OnInit {
  @Output()
  public onFormSubmit: EventEmitter<any> = new EventEmitter();

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

  public submit() {
    this.onFormSubmit.emit(this.form.value);
  }


}
