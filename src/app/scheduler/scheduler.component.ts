import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  title = 'Regression Test Scheduler';

  constructor(@Inject(DOCUMENT) private document: any) { }

  clickGetUsers(event) {
    // alert(event.ename);
    this.document.location.href = 'http://localhost:8082/'.concat(event.ename).concat('/getusers');
  }

  ngOnInit() {
  }
}
