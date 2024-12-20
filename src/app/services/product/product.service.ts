import { ProductType } from '../../outils/produit.outils';
import { Produit } from './../../models/produit.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsList: Produit[] = [];
  currentIndex: number = 1;

  constructor() { 
    this.load();
  }

  private save(){
    localStorage.setItem('products', JSON.stringify(this.productsList));
  }

  getAll() : Produit[] {
    return this.productsList.map(produit => produit.copy());
  }

  private load(){
    const productData = localStorage.getItem('products');

    if(productData){
      this.productsList = JSON.parse(productData).map((productJSON : any) => Object.assign(new Produit(), productJSON));
      this.currentIndex = Math.max(...this.productsList.map(produit => produit.id));
    }else{
      this.init();
      this.save();
    }
  }

  private init(){
    this.productsList = [];
    
    const produit1 = new Produit();
    produit1.id = this.currentIndex++;
    produit1.name = "Amstel 65 cl";
    produit1.hp = 65;
    produit1.figureCatpion = "Amstel";
    this.productsList.push(produit1);

    const produit2 = new Produit();
    produit2.id = this.currentIndex++;
    produit2.name = "Amstel Bock";
    produit2.image = "/img/bock.png";
    produit2.type = ProductType.BOCK;
    produit2.hp = 33;
    produit2.figureCatpion = "Bock";
    this.productsList.push(produit2);

    const produit3 = new Produit();
    produit3.id = this.currentIndex++;
    produit3.name = "Heineken";
    produit3.image = "/img/heineken.png";
    produit3.type = ProductType.HEINEKEN;
    produit3.hp = 33;
    produit3.figureCatpion = "Heineken";
    this.productsList.push(produit3);

    const produit4 = new Produit();
    produit4.id = this.currentIndex++;
    produit4.name = "Royal";
    produit4.image = "/img/royal.png";
    produit4.type = ProductType.ROYAL;
    produit4.hp = 50;
    produit4.figureCatpion = "Royal";
    this.productsList.push(produit4);
  }

  get(id : number) : Produit | undefined{
    const produit = this.productsList.find(produit => produit.id==id);

    return produit ? produit.copy() : undefined;
  }

  add(produit: Produit) : Produit{
    const productCopy = produit.copy();

    productCopy.id = this.currentIndex;
    this.productsList.push(productCopy.copy());
    this.currentIndex++;
    this.save();

    return productCopy;
  }

  update(produit: Produit) : Produit{
    const productCopy = produit.copy();

    const productIndex = this.productsList.findIndex(originalProduct => originalProduct.id==produit.id);

    if(productIndex != -1){
      this.productsList[productIndex] = productCopy.copy();
      this.save();
    }

    return productCopy;
  }

  delete(id: number){
    const productIndex = this.productsList.findIndex(originalProduct => originalProduct.id==id);

    if(productIndex != -1){
      //.splice permet d'enlever un élément dans un tableau à l'index selectionné et on lui indique 
      // combien d'éléments(donc ici c'est 1 qui est en paramètre) à enlever à partir de cet index 
      this.productsList.splice(productIndex, 1);
      this.save();
    }
  }
}
