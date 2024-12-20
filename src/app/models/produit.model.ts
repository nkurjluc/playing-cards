import { ProductType } from "../outils/produit.outils";

export class Produit{
    id: number = -1;
    name: string = "Amstel 75 cl";
    image: string = "/img/amstel.png";
    type : ProductType = ProductType.AMSTEL;
    hp: number = 65;
    figureCatpion: string = "Amstel";
    attackName: string = "Prix";
    attackStrength: number = 3500;
    attackDescription: string = "La bierre fraiche est bonne pour la santé";

    //Object.assign va prendre un objet à gauche et lui assigne tous les parametres de l'objet à  droite 
    copy() : Produit{
        return Object.assign(new Produit(), this);
    }
}