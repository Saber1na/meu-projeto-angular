import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilComponent, HeaderComponent, InicioComponent, ProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
