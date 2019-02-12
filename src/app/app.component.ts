import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regression Test Scheduler';
  form = new FormGroup({});

  onSubmit() {
    console.log('Hey');
  }
}
