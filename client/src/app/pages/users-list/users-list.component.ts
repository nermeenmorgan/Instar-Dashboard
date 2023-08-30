import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe(
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
    this.authService.deleteUser(id).subscribe(
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
