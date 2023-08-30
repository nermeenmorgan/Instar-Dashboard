import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="topbar">
      <div class="page-title">{{ pageTitle }}</div>
      <!-- Rest of your topbar content -->
    </div>
  `
})
export class TopbarComponent implements OnInit {
  pageTitle: string = 'Dashboard';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeData = this.activatedRoute.root.firstChild?.snapshot.data;
        if (routeData && routeData['pageTitle']) {
          this.pageTitle = routeData['pageTitle'];
        }
      });
  }
}
