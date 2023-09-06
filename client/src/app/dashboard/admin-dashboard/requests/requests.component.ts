import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

  requests: any[] = [];

  constructor(private router: Router,private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.requestService.getAllRequests().subscribe(
      (data: any[]) => {
        this.requests = data;
        console.log(this.requests);
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
