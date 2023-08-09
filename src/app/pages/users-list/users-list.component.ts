import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: any[] = [
    {
      "id": 1,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "phone": "215487"
    },
    {
      "id": 1,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "phone": "215487"
    },
    {
      "id": 1,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "phone": "215487"
    },{
      "id": 1,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "phone": "215487"
    },
  ]
  constructor() { }

  //get users list from api
  ngOnInit() { }


}
