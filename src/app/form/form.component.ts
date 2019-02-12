import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  profileForm = new FormGroup({
    firstName: new FormControl('',
      [Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z0-9 ]{3,50}')]),
    lastName: new FormControl(''),
  });


  mycolor = '';

  ngOnInit() {
  }

  click(color) {
    this.mycolor = color;
  }

  dblClick() {
    this.mycolor = '';
  }

  alertBox() {
    alert('Helo Subu');
  }

}
