import { Component, computed, inject, model, signal } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Produit } from '../../models/produit.model';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private productService = inject(ProductService);
  private router = inject(Router);
  produits = signal<Produit[]>([]);  
  search = model('');

  filteredProducts = computed(() => {
    return this.produits().filter(product => product.name.includes(this.search()));
  })

  constructor(){
    this.produits.set(this.productService.getAll());  
  }  

  addProduct(){
    this.router.navigate(['product']);
    /*const genericProduct = new Produit()
    this.productService.add(genericProduct);
    this.produits.set(this.productService.getAll());*/
  }

  openProduct(product: Produit){
    this.router.navigate(['product', product.id])
  }
}
