import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private router: Router) { }

  navigateToUserProfile() {
    this.router.navigate(['/provider/profile/1']);
  }
}
