import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CompraComponent } from './components/compra/compra.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { SobreComponent } from "./components/sobre/sobre.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { LoginComponent } from "./components/login/login.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InicioComponent, ProdutosComponent, CompraComponent, CarrinhoComponent, SobreComponent, ContatoComponent, LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto-angular';
  isModalVisible: boolean = true;
}
