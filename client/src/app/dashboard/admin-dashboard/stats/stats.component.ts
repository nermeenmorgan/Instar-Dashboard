import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

   ngOnInit(): void {
    const visitorsCtx = document.getElementById('visitorsChart') as HTMLCanvasElement;
    const activityCtx = document.getElementById('activityChart') as HTMLCanvasElement;
    const yearlyIncomeCtx = document.getElementById('yearlyIncomeChart') as HTMLCanvasElement;
    const conversionCtx = document.getElementById('conversionChart') as HTMLCanvasElement;
    
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 
    const visitorsData = [5, 3, 7, 2, 6, 4, 8];
    const activityData = [5, 3, 7, 2, 6, 4, 8];
    const yearlyIncomeData =
      [12000, 15000, 18000, 14000, 16000, 13000, 17000, 19000, 16000, 14000, 17000, 20000];
    const conversionData = [60, 35, 28, 26, 30, 25, 10];

     
    const highestValue = Math.max(...visitorsData);

    // Visitors chart
    new Chart(visitorsCtx, {
      type: 'bar',
      data: {
        labels: weekDays,
        datasets: [{
          data: visitorsData,
          backgroundColor: (context) =>
            context.dataset.data[context.dataIndex] === highestValue ? '#696CFF' : 'rgba(105, 108, 255, 0.5)',
          barPercentage: 0.8, 
          categoryPercentage: 1.0,
          borderWidth: 0,
          borderRadius: 22
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
            beginAtZero: true
          }
        }
      }
    });
     
    // Activity chart
    new Chart(activityCtx, {
      type: 'line',
      data: {
        labels: weekDays,
        datasets: [{
          data: activityData,
          borderColor: '#71DD37',
          fill: true,
          backgroundColor: 'rgba(113, 221, 55, 0.2)', // Fill color
          borderWidth: 2, // Line width
          pointRadius: 0, // Hide point dots
          tension: 0.3 // Adjust the tension for smoothness (0.0 to 1.0)
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
            beginAtZero: true
          }
        }
      }
    });
     
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

    //  Conversion chart
    new Chart(conversionCtx, {
      type: 'line',
      data: {
        labels: weekDays,
        datasets: [{
          data: conversionData,
          borderColor: '#696CFF',
          borderWidth: 5,
          pointRadius: 6.5,
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
          },
          point: {
            borderWidth: 0, // Hide point borders
            hitRadius: 8, // Increase the hit radius for easier interaction
          }
        },
      }
    });
     
  }
}
