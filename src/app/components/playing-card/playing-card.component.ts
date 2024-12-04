import { Component, input, Input, InputSignal } from '@angular/core';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})

export class PlayingCardComponent {  
  /*@Input({alias: 'mon-produit',
    transform: (value: Produit) => {
      value.hp = value.hp/2;
      return value;
    }   
  }
)*/ 

produit : InputSignal<Produit> = input(new Produit(), {
  alias:'mon-produit',
  transform: (value:Produit)=> {
    value.hp = value.hp/2
    return value;
  }
}); 
}
