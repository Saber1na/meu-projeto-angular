import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Corrigido para styleUrls (plural)
})
export class HeaderComponent {


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (header) {
      header.classList.toggle('rolagem', window.scrollY > 10);
    }
  }

  @ViewChild('mobileMenuButton', { static: true })
  mobileMenuButton!: ElementRef<HTMLButtonElement>;

  @ViewChild('mobileNav', { static: true })
  mobileNav!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.mobileMenuButton.nativeElement.addEventListener('click', () => {
      this.mobileNav.nativeElement.classList.toggle('active');
    });
  }

  isPopupVisible: boolean = false; // Controla o pop-up
  isCadastroSuccess: boolean = false; // Controla se a mensagem de sucesso é exibida

  // Exibe o pop-up
  openPopup(): void {
    this.isPopupVisible = true;
  }

  // Fecha o pop-up
  closePopup(): void {
    this.isPopupVisible = false;
    this.isCadastroSuccess = false; // Reseta a mensagem de sucesso
  }

  // Exibe mensagem de cadastro bem-sucedido
  onCadastro(): void {
    this.isCadastroSuccess = true;
  }
  
}
