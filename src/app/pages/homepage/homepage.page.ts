import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor() {
  }

  @ViewChild('navbar', { static: true }) navbar: ElementRef;
  @ViewChild('navLinks', { static: true }) navLinks: ElementRef;
  @ViewChild('burger', { static: true }) burger: ElementRef;

  ngOnInit() {}
  
  toggleNav() {
    this.navLinks.nativeElement.classList.toggle('nav-active');
    this.burger.nativeElement.classList.toggle('toggle');
  }

  navigateSection(element : string, isburger = true): void {
    document.getElementById(element).scrollIntoView({ behavior:"smooth" });

    if(isburger) {
      this.navLinks.nativeElement.classList.toggle('nav-active');
      this.burger.nativeElement.classList.toggle('toggle');
    }
  }
}
