import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subu-child',
  templateUrl: './subu-child.component.html',
  styleUrls: ['./subu-child.component.css']
})
export class SubuChildComponent implements OnInit {

  @Input() childName: String;
  value1 = '';

  constructor() {
  }

  ngOnInit() {
  }

  tiggerClick(value) {
    this.value1 = value;
  }

}
