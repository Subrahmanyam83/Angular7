import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users = {name: 'Subu', age: 36};
  constructor() { }



  ngOnInit() {
  }

}
