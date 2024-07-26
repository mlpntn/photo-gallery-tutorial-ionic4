import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countDownDate: number;
  countdownDisplay: string;
  countdownInterval: any;

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  constructor() { 
    this.countDownDate = new Date("September 21, 2024 01:30:00").getTime();
  }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
    const now = new Date().getTime();

    const distance = this.countDownDate - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.countdownDisplay = "EXPIRED";
      }
    }, 1000);
  }
}
