export enum ProductType{
    AMSTEL = "amstel",
    BOCK = "bock",
    HEINEKEN = "heineken",
    ROYAL = "royal"
}

export interface IProductProperties{
    imageUrl: string;
    color : string;
}

//Création d'un dictionaire qui va mapper le type du produit vers ses propriétés
export const ProductTypeProperties: {[key: string]: IProductProperties} = {
    [ProductType.AMSTEL]:{
        imageUrl:'/img/amstel.png',
        color : 'rgba(135,255,124)'
    },
    [ProductType.BOCK]:{
        imageUrl:'/img/bock.png',
        color : 'rgba(255,255,104)'
    },
    [ProductType.HEINEKEN]:{
        imageUrl:'/img/heineken.png',
        color : 'rgba(255,104,104)'
    },
    [ProductType.ROYAL]:{
        imageUrl:'/img/royal.png',
        color : 'rgba(118,255,124)'
    }
    
    }