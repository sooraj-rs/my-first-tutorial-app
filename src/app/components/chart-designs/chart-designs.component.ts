import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; // Import the plugin

@Component({
  selector: 'app-chart-designs',
  templateUrl: './chart-designs.component.html',
  styleUrls: ['./chart-designs.component.css']
})
export class ChartDesignsComponent implements OnInit, AfterViewInit {

  pieChartData = [
    { label: 'Item 1', data: 30, color: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)' },
    { label: 'Item 2', data: 20, color: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)' },
    { label: 'Item 3', data: 50, color: 'rgba(255, 206, 86, 0.2)', borderColor: 'rgba(255, 206, 86, 1)' }
  ];

  canvasHeight: number = 0;

  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.canvasHeight = window.innerHeight; // Adjust this value as needed
    this.createPieChart();
  }

  createPieChart() {
    const ctx = this.pieChartCanvas.nativeElement.getContext('2d');
    if (!ctx) return; // Ensure context is available
    const labels = this.pieChartData.map(item => item.label);
    const data = this.pieChartData.map(item => item.data);
    const backgroundColor = this.pieChartData.map(item => item.color);
    const borderColor = this.pieChartData.map(item => item.borderColor);

    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Pie Chart',
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          animateRotate: true
        },
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

}
