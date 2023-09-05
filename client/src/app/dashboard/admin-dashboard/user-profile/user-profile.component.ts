import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const yearlyIncomeCtx = document.getElementById('yearlyIncomeChart') as HTMLCanvasElement;
    const totalIncomeCtx = document.getElementById('totalIncomeChart') as HTMLCanvasElement;
    const yearlyIncomeData =
      [12000, 15000, 18000, 14000, 16000, 13000, 17000, 19000, 16000, 14000, 17000, 20000];
    const totalIncomeData =
      [12000, 15000, 18000, 14000, 16000, 13000, 17000, 19000, 16000, 14000, 17000, 20000];
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
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

    // Yearly income chart
     new Chart(yearlyIncomeCtx, {
      type: 'line',
      data: {
        labels: monthNames,
        datasets: [{
          label: 'Yearly Income',
          data: yearlyIncomeData,
          borderColor: '#696CFF',
          borderWidth: 2,
          pointRadius: 0, // Hide data points
          fill: true, // Fill area under the line
          backgroundColor: 'rgba(105, 108, 255, 0.3)' // Fill color
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              // Show left labels with numbers
              callback: function(value, index, values) {
                return value;
              }
            }
          }
        }
      }
     });
    
    
    //  Total income chart
    new Chart(totalIncomeCtx, {
      type: 'line',
      data: {
        labels: monthNames,
        datasets: [{
          data: totalIncomeData,
          borderColor: '#696CFF',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.4,
          pointBackgroundColor: 'white',
          pointBorderColor: '#696CFF',
          fill: false
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false
            }
          }
        },
        elements: {
          line: {
            tension: 0 // Make the line segments straight
          }
          
        },
      }
    });
  }

  
}
