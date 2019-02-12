import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subu',
  templateUrl: './subu.component.html',
  styleUrls: ['./subu.component.css']
})
export class SubuComponent implements OnInit {

  message = '';
  values = '';
  hero = 'Subrahmanyam Rentala';
  cName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onClick(value) {
    this.message = value;
  }

  dblClick(event: any) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  printAsYouWrite(value1: String) {
    // @ts-ignore
    this.value1 = value1;
  }

}
