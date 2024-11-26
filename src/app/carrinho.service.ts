import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Produto {
  id: number;
  name: string;
  value: number;
  discount: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: Produto[] = [];
  private carrinhoSubject = new BehaviorSubject<Produto[]>([]);

  constructor() {}

  getCarrinho() {
    return this.carrinhoSubject.asObservable();
  }

  adicionarProduto(produto: Produto) {
    this.carrinho.push(produto);
    this.carrinhoSubject.next(this.carrinho);
  }

  removerProduto(id: number) {
    this.carrinho = this.carrinho.filter(produto => produto.id !== id);
    this.carrinhoSubject.next(this.carrinho);
  }
  calcularTotal(): number {
    return this.carrinho.reduce((total, produto) => {
      return total + (produto.discount || produto.value);
    }, 0);
  }
}
