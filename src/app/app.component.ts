import {Component, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regression Test Scheduler';
  form = new FormGroup({});

  // @Input()
  name: string;
  name1: string;

  constructor() {
    // this.name = 'h';
  }

  onSubmit() {
    console.log('Hey');
  }

  onSave(event: Event) {
    console.log(event);
  }

  // @Output()
  setUppercase(val: string) {
    if (val.charAt(2) === 's') {
      this.name = val.toString().toUpperCase();
    }
  }
}
