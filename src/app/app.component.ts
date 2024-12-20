import { ProductService } from './services/product/product.service';
import { ProductType, ProductTypeProperties } from './outils/produit.outils';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Produit } from './models/produit.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',  
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.Component.html',
  styleUrl: './app.Component.css'
})

export class AppComponent {
  
}


