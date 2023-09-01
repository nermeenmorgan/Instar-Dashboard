import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];

    // Fetch user data using the UserService
    this.userService.getUserById(userId).subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
