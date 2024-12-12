import { ProductType, ProductTypeProperties } from './outils/produit.outils';
import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Produit } from './models/produit.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',  
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.Component.html',
  styleUrl: './app.Component.css'
})
export class AppComponent {
  produits !: Produit[];  
  count: number = 0;
  search: string ='';

  //selectedProductIndex = 1;
  selectedProductIndex = signal(1);
  selectedProduct = computed(() => {
    return this.produits[this.selectedProductIndex()];
  })

  constructor(){
    //Utilisqtion de la primitive effect()
    effect(() => {
      console.log(this.selectedProduct());
    }) 

    this.produits = [];

    const produit1 = new Produit();
    produit1.name = "Amstel 65 cl";
    produit1.hp = 65;
    produit1.figureCatpion = "Amstel";
    this.produits.push(produit1);

    const produit2 = new Produit();
    produit2.name = "Amstel Bock";
    produit2.image = "/img/bock.png";
    produit2.type = ProductType.BOCK;
    produit2.hp = 33;
    produit2.figureCatpion = "Bock";
    this.produits.push(produit2);
  }

  increaseCount(){    
    this.count++;
  }

  toggleProduct(){
    //Ce qui suit est utilisé quand selectedProductIndex est initialisé directement à un nombre pas à un signal
    //this.selectedProductIndex = (this.selectedProductIndex+1)%this.produits.length;
    this.selectedProductIndex.set((this.selectedProductIndex()+1)%this.produits.length);
  }
}
