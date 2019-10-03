import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-ngx-form',
  templateUrl: './ngx-form.component.html',
  styleUrls: ['./ngx-form.component.scss']
})
export class NgxFormComponent implements OnInit {
  @Output()
  public onFormSubmit: EventEmitter<any> = new EventEmitter();

  public form = new FormGroup({});
  public model: any = {};
  public fields: FormlyFieldConfig[];

  public ngOnInit() {
    import('./fields.json').then((formConfig) => {
      this.fields = formConfig['default'];
    });
  }

  public submit() {
    if (this.form.valid) {
      this.onFormSubmit.emit(this.model);
    }
  }
}
