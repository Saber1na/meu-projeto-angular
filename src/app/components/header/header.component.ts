import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CarrinhoService } from '../../carrinho.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mensagem: string | null = null;
  cardNumber: string = '';
  expiration: string = '';
  cvc: string = '';
  formattedCardNumber: string = '';
  formattedExpiration: string = '';
  formattedCvc: string = '';
  carrinho: any[] = [];
  totalCarrinho: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {

    this.carrinhoService.getCarrinho().subscribe(carrinho => {
      this.carrinho = carrinho;
      this.totalCarrinho = this.carrinhoService.calcularTotal();
    });
  }
  removerDoCarrinho(id: number) {
    this.carrinhoService.removerProduto(id);
  }

  onCardNumberInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    const formatted = input.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.cardNumber = formatted.trim();
  }

  onExpirationInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    const formatted = input.replace(/(\d{2})(?=\d)/, '$1 / ');
    this.expiration = formatted.trim();
  }

  onCvcInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value.replace(/\D/g, '').substring(0, 3);
    this.cvc = input;
  }

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

  isPopupVisible1: boolean = false;

  openCarrinho(): void {
    this.isPopupVisible1 = true;
  }
  exibirMensagem(texto: string): void {
    this.mensagem = texto;
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }

  closeCarrinho(): void {
    this.isPopupVisible1 = false;
  }

  isPopupVisible: boolean = false;
  isCadastroSuccess: boolean = false;

  openPopup(): void {
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
    this.isCadastroSuccess = false;
  }

  onCadastro(): void {
    this.isCadastroSuccess = true;
    this.exibirMensagem("Login efetuado com sucesso!");
    this.closePopup();
  }

}
