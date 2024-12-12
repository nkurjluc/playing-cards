import { ProductType } from "../outils/produit.outils";

export class Produit{
    name: string = "Amstel 75 cl";
    image: string = "/img/amstel.png";
    type : ProductType = ProductType.AMSTEL;
    hp: number = 65;
    figureCatpion: string = "Amstel";
    attackName: string = "Prix";
    attackStrength: number = 3500;
    attackDescription: string = "La bierre fraiche est bonne pour la santé";
}