import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll',  
    ['$event'])
     onWindowScroll() {
       const header = document.getElementById('header');
       if (header) {
         header.classList.toggle('rolagem', window.scrollY > 10);
       }
     }
    @ViewChild('mobileMenuButton', { static: true }) mobileMenuButton!: ElementRef<HTMLButtonElement>;
    @ViewChild('mobileNav', { static: true }) mobileNav!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.mobileMenuButton.nativeElement.addEventListener('click', () => {
      this.mobileNav.nativeElement.classList.toggle('active');
    });
  }
}

