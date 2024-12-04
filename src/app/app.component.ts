import { Component } from '@angular/core';
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
  produit1 !: Produit;  
  count: number = 0;
  search: string ='';

  constructor(){
    this.produit1 = new Produit();
    this.produit1.name = "Amstel Bock";
    this.produit1.hp = 40;
    this.produit1.figureCatpion = "Bock";
  }

  increaseCount(){    
    this.count++;
  }
}
