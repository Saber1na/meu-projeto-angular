import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { ProdutosComponent } from '../components/produtos/produtos.component';
import { ContatoComponent } from '../components/contato/contato.component';
import { FooterComponent } from '../components/footer/footer.component';




@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-inicio></app-inicio>
    <app-sobre></app-sobre>
    <app-produtos></app-produtos>
    <app-contato></app-contato>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [
  HeaderComponent,
  InicioComponent,
  SobreComponent,
  ProdutosComponent,
  ContatoComponent,
  FooterComponent
  ],
})
export class HomeComponent {}
