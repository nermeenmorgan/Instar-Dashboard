import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  navigateToUserProfile(userId: number) {
    this.router.navigate(['/user-profile', userId]);
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      (data: any[]) => {
        this.users = data;
        console.log(this.users);
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log(`User with ID ${id} deleted`);
        this.users = this.users.filter(user => user.id !== id);
      },
      (error: any) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      }
    );
  }

}
