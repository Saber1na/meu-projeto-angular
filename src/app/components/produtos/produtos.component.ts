import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../../carrinho.service';

export interface Produto {
 id: number;
 name: string;
 image: string;
 description: string;
 value: number;
 discount: number;
 rating?: number;
 freeShipping: boolean;
}
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) {}

  products: Produto[] = [
    {
      id: 1,
      name: 'Barraca de Camping',
      image: '../../../assets/barraca1.png',
      description: 'Flash 6 NTK de montagem rápida e 3000mm de coluna d´água',
      value: 4158.20,
      discount: 4033.45,
      rating: 5,
      freeShipping: true,
    },
    {
      id: 2,
      name: 'Barraca de Camping',
      image: '../../../assets/barraca2.png',
      description: 'Explorer 4/6 NTK com 2500mm de coluna d´água',
      value: 3112.40,
      discount: 3019.03,
      rating: 4.6,
      freeShipping: true,
    },
    {
      id: 3,
      name: 'Barraca de Camping',
      image: '../../../assets/barraca3.png',
      description: 'Colorado NTK 5/6 pessoas e coluna d´água de 2500mm',
      value: 2403.00,
      discount: 2330.91,
      rating: 4.3,
      freeShipping: true,
    },
    {
      id: 4,
      name: 'Barraca de Camping',
      image: '../../../assets/barraca4.png',
      description: 'NTK Indy GT 3/4 pessoas Coluna d´água de 2500mm',
      value: 1859.70,
      discount: 1803.91,
      rating: 3,
      freeShipping: true,
    },
    {
      id: 5,
      name: 'Barraca Patagônia',
      image: '../../../assets/barraca5.png',
      description: 'NTK 4 pessoas com avancê 3000mm',
      value: 1560.90,
      discount: 1514.07,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 6,
      name: 'Mochila Duffle',
      image: '../../../assets/mochila1.png',
      description: 'Bag NTK para Viagens 70 Litros',
      value: 511.00,
      discount: 495.67,
      rating: 4.2,
      freeShipping: true,
    },
    {
      id: 7,
      name: 'Mochila Duffle',
      image: '../../../assets/mochila2.png',
      description: 'BK NTK para Viagens 20L',
      value: 235.00,
      discount: 227.95,
      rating: 3.9,
      freeShipping: true,
    },
    {
      id: 8,
      name: 'Mochila Cargueira',
      image: '../../../assets/mochila3.png',
      description: 'Nautika Intruder 60 litros',
      value:  589.50,
      discount: 571.82,
      rating: 3.7,
      freeShipping: true,
    },
    {
      id: 9,
      name: 'Mochila Semi-Cargueira',
      image: '../../../assets/mochila4.png',
      description: 'Nautika Intruder 45 litros',
      value: 437.50,
      discount: 424.38,
      rating: 3.5,
      freeShipping: true,
    },
    {
      id: 10,
      name: 'Mochila Daypack',
      image: '../../../assets/mochila5.png',
      description: 'Street NTK',
      value: 214.30,
      discount: 207.87,
      rating: 3.3,
      freeShipping: true,
    },
    {
      id: 11,
      name: 'Saco de dormir Kokan',
      image: '../../../assets/saco-dormir1.png',
      description: 'NTK solteiro para temperatura entre 6°C e 20°C',
      value: 257.10,
      discount: 249.39,
      rating: 3.7,
      freeShipping: true,
    },
    {
      id: 12,
      name: 'Saco de dormir Bugy',
      image: '../../../assets/saco-dormir2.png',
      description: 'NTK solteiro para temperatura entre 8°C e 15°C',
      value: 128.60,
      discount: 124.74,
      rating: 3,
      freeShipping: true,
    },
    {
      id: 13,
      name: 'Saco de dormir sarcófago Antartik',
      image: '../../../assets/saco-dormir3.png',
      description: 'NTK -7°C à 3°C',
      value: 428.90,
      discount: 416.03,
      rating: 3,
      freeShipping: true,
    },
    {
      id: 14,
      name: 'Saco de dormir Everest do tipo sarcófago',
      image: '../../../assets/saco-dormir4.png',
      description: 'NTK -10°C a 5°C',
      value: 522.00,
      discount: 506.34,
      rating: 4.3,
      freeShipping: true,
    },
    {
      id: 15,
      name: 'Saco de Dormir Viper',
      image: '../../../assets/saco-dormir5.png',
      description: 'Solteiro para Temperaturas entre 5°C à 12°C NTK',
      value: 170.00,
      discount: 164.90,
      rating: 3,
      freeShipping: true,
    },
    {
      id: 16,
      name: 'Colchão inflável casal',
      image: '../../../assets/colchao1.png',
      description: 'Zenite com inflador incorporado que suporta 300kg NTK',
      value: 493.10,
      discount: 478.31,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 17,
      name: 'Colchão Inflável Solteiro Mirage',
      image: '../../../assets/colchao2.png',
      description: 'Nautika Até 100kg',
      value: 191.70,
      discount: 185.95,
      rating: 3.7,
      freeShipping: true,
    },
    {
      id: 18,
      name: 'Colchão inflável casal Mirage',
      image: '../../../assets/colchao3.png',
      description: 'NTK que suporta até 200kg',
      value: 299.50,
      discount: 290.52,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 19,
      name: 'Colchão inflável king Brunei',
      image: '../../../assets/colchao4.png',
      description: 'Com altura extra dimensionada que suporta 250kg NTK',
      value: 986.20,
      discount: 956.61,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 20,
      name: 'Colchão inflável solteiro Zenite',
      image: '../../../assets/colchao5.png',
      description: 'Com inflador incorporado que suporta 100kg NTK',
      value: 255.90,
      discount: 248.22,
      rating: 3.6,
      freeShipping: true,
    },
    {
      id: 21,
      name: 'Fogareiro de Mesa',
      image: '../../../assets/fogareiro1.png',
      description: 'Frontier com Maleta NTK',
      value: 187.10,
      discount: 181.49,
      rating: 4.2,
      freeShipping: true,
    },
    {
      id: 22,
      name: 'Lampião Lanterna USB',
      image: '../../../assets/lampiao2.png',
      description: 'Radiant NTK 250 Lúmens Recarregável',
      value: 170.00,
      discount: 164.90,
      rating: 4.3,
      freeShipping: true,
    },
    {
      id: 23,
      name: 'Fogareiro Stain',
      image: '../../../assets/fogareiro3.png',
      description: 'NTK em Aço Inox com Ignição Automática e Flex Fuel',
      value: 227.80,
      discount: 220.97,
      rating: 5,
      freeShipping: true,
    },
    {
      id: 24,
      name: 'Fogareiro Átomo',
      image: '../../../assets/fogareiro4.png',
      description: 'NTK em Aço Inox com Sistema de Regulagem',
      value: 102.40,
      discount: 98.36,
      rating: 4.1,
      freeShipping: true,
    },
    {
      id: 25,
      name: 'Lampião Cairo',
      image: '../../../assets/lampiao5.png',
      description: 'NTK com sistema de cartucho',
      value: 227.80,
      discount: 220.97,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 26,
      name: 'Cadeira dobrável Andrade',
      image: '../../../assets/cadeira1.png',
      description: 'De 1 estágio tamanho P NTK',
      value: 170.50,
      discount: 165.39,
      rating: 3.9,
      freeShipping: true,
    },
    {
      id: 27,
      name: 'Banqueta Dobrável',
      image: '../../../assets/cadeira2.png',
      description: 'Para Camping Step 1 Verde NTK',
      value: 65.00,
      discount: 63.05,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 28,
      name: 'Cadeira Dobrável Nautika Boni',
      image: '../../../assets/cadeira3.png',
      description: 'Com Assento e Encosto Estofado',
      value: 315.00,
      discount: 305.55,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 29,
      name: 'Mesa dobrável Robust',
      image: '../../../assets/mesa4.png',
      description: 'Com ajuste de altura 80cm NTK',
      value: 239.90,
      discount: 232.70,
      rating: 3.9,
      freeShipping: true,
    },
    {
      id: 30,
      name: 'Mesa dobrável Lua',
      image: '../../assets/mesa5.png',
      description: 'Com 4 porta copos da NTK',
      value: 200.80,
      discount: 194.78,
      rating: 4,
      freeShipping: true,
    }
  ];
   mensagem: string | null = null;
   searchTerm: string = '';
   filtroFreteGratis: boolean = false;
   ordenacao: string = 'popular';

   filteredProducts: Produto[] = this.products;

   isPopupVisible: boolean = false;
   produtoSelecionado: any | null = null;

   openPopup(produto: any): void {
     this.produtoSelecionado = produto;
     this.isPopupVisible = true;
   }

   closePopup(): void {
     this.isPopupVisible = false;
     this.produtoSelecionado = null;
   }

   buscarProdutos(): void {
     this.filteredProducts = this.products.filter((produto) => {
       const matchSearch = produto.name
         .toLowerCase()
         .includes(this.searchTerm.toLowerCase());
       const matchFreeShipping =
         !this.filtroFreteGratis || produto.freeShipping;
       return matchSearch && matchFreeShipping;
     });
   }
   ordenarProdutos(): void {
     this.filteredProducts.sort((a, b) => {
       if (this.ordenacao === 'menor-preco') {
         return a.discount - b.discount;
       } else if (this.ordenacao === 'maior-preco') {
         return b.discount - a.discount;
       } else {
         return b.rating! - a.rating!;
       }
     });
   }

   ngOnInit(): void {
     this.buscarProdutos();
     this.ordenarProdutos();
   }
   adicionarAoCarrinho(produto: any): void {
     this.carrinhoService.adicionarProduto(produto);
     this.exibirMensagem("Produto adicionado ao carrinho!");
     this.closePopup();
   }
   exibirMensagem(texto: string): void {
    this.mensagem = texto;
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
 }


