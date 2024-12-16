import { ProductType, ProductTypeProperties } from './outils/produit.outils';
import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Produit } from './models/produit.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',  
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.Component.html',
  styleUrl: './app.Component.css'
})

export class AppComponent {
  produits!: Produit[];  
  //count: number = 0;
  //search: string ='';
  //selectedProductIndex = 1;
  //selectedProductIndex = signal(1);
  /*selectedProduct = computed(() => {
    return this.produits[this.selectedProductIndex()];
  })*/

  constructor(){
    
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

    const produit3 = new Produit();
    produit3.name = "Heineken";
    produit3.image = "/img/heineken.png";
    produit3.type = ProductType.HEINEKEN;
    produit3.hp = 33;
    produit3.figureCatpion = "Heineken";
    this.produits.push(produit3);

    const produit4 = new Produit();
    produit4.name = "Royal";
    produit4.image = "/img/royal.png";
    produit4.type = ProductType.ROYAL;
    produit4.hp = 50;
    produit4.figureCatpion = "Royal";
    this.produits.push(produit4);
   
  }  
}


//Utilisqtion de la primitive effect()
    /*effect(() => {
      console.log(this.selectedProduct());
    })*/
   
  /*increaseCount(){    
    this.count++;
  }*/

  /*toggleProduct(){
    //Ce qui suit est utilisé quand selectedProductIndex est initialisé directement à un nombre pas à un signal
    //this.selectedProductIndex = (this.selectedProductIndex+1)%this.produits.length;
    this.selectedProductIndex.set((this.selectedProductIndex()+1)%this.produits.length);
  }*/