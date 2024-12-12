import { ProductType } from './../../outils/produit.outils';
import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { ProductTypeProperties } from '../../outils/produit.outils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})

export class PlayingCardComponent implements OnChanges {
    
  produit =  input(new Produit());
  productTypeIcon: string = "/img/electric.png";
  backgroundColor: string = "rgb(255,255,104)";

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['produit']){
      if(changes['produit'].previousValue?.type != changes['produit'].currentValue.tye){
        this.productTypeIcon = ProductTypeProperties[this.produit().type].imageUrl;
        this.backgroundColor = ProductTypeProperties[this.produit().type].color;        
      }
    }
  } 
  
  /*@Input({alias: 'mon-produit',
    transform: (value: Produit) => {
      value.hp = value.hp/2;
      return value;
    }   
  }
)*/ 
}
