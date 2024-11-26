import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProdutos'
})
export class FiltroProdutosPipe implements PipeTransform {
  transform(produtos: any[], searchTerm: string, freteGratis: boolean): any[] {
    if (!produtos) return [];
    if (!searchTerm && !freteGratis) return produtos;

    return produtos.filter(produto =>
      (!searchTerm || produto.nome.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!freteGratis || produto.freteGratis)
    );
  }
}
