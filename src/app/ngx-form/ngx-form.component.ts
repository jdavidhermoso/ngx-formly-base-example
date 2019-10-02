import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-ngx-form',
  templateUrl: './ngx-form.component.html',
  styleUrls: ['./ngx-form.component.scss']
})
export class NgxFormComponent {
  @Output()
  public onFormSubmit: EventEmitter<any> = new EventEmitter();

  public form = new FormGroup({});
  public model: any = {};
  public fields: FormlyFieldConfig[] = [
    {
      key: 'player1',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Name'
          }
        },
        {
          key: 'team',
          type: 'radio',
          templateOptions: {
            label: 'Team',
            placeholder: 'Team',
            description: 'Team',
            required: true,
            options: [
              { value: 1, label: 'Team 1' },
              { value: 2, label: 'Team 2' }
            ],
          }
        }
      ]
    },
    {
      key: 'player2',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Name'
          }
        },
        {
          key: 'team',
          type: 'radio',
          templateOptions: {
            label: 'Team',
            placeholder: 'Team',
            description: 'Team',
            required: true,
            options: [
              { value: 1, label: 'Team 1' },
              { value: 2, label: 'Team 2' }
            ],
          }
        }
      ],
    },
    {
      key: 'player3',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Name'
          }
        },
        {
          key: 'team',
          type: 'radio',
          templateOptions: {
            label: 'Team',
            placeholder: 'Team',
            description: 'Team',
            required: true,
            options: [
              { value: 1, label: 'Team 1' },
              { value: 2, label: 'Team 2' }
            ],
          }
        }
      ],
    },
    {
      key: 'player4',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Name'
          }
        },
        {
          key: 'team',
          type: 'radio',
          templateOptions: {
            label: 'Team',
            placeholder: 'Team',
            description: 'Team',
            required: true,
            options: [
              { value: 1, label: 'Team 1' },
              { value: 2, label: 'Team 2' }
            ],
          }
        }
      ],
    }
  ];

  public submit() {
    if (this.form.valid) {
      this.onFormSubmit.emit(this.model);
    }
  }
}
