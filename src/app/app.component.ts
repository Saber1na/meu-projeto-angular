import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { CompraComponent } from "./components/compra/compra.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InicioComponent, ProdutosComponent, CompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
