import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewInit {

  private scrollHandler = this.onWindowScroll.bind(this);

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  onWindowScroll(): void {
    console.log('Scroll event triggered');
    console.log('Scroll position:', window.scrollY);
  }
}
