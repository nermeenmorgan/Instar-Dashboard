import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
 
  constructor(private router: Router, private userService: UserService ) {}

  ngOnInit(): void {
    this.users = this.userService.users; // Assign the users from the shared service
  }

  navigateToUserProfile(userId: number) {
    this.router.navigate(['/user-profile', userId]);
  }

}
