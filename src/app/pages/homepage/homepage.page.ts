import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  isChurch: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeMaps() {
    this.isChurch = !this.isChurch;
  }
}
