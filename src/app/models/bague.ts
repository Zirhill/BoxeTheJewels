export class Bague {
    libelle: string;
    description: string;
    urlPhoto: string;
    materiauxRing: string;
    materiauxStone: string;
    price: number;

    constructor(
        libelle: string,
        description: string,
        urlPhoto: string,
        materiauxRing: string,
        materiauxStone: string,
        price: number
    )   {
        this.libelle = libelle;
        this.description = description;
        this.urlPhoto = urlPhoto;
        this.materiauxRing = materiauxRing;
        this.materiauxStone = materiauxStone;
        this.price = price;
    }
}
