import { Injectable } from '@angular/core';
import { Bague } from '../models/bague';

@Injectable({
  providedIn: 'root'
})
export class BaguesService {

  bagues: Bague[] = [
    new Bague(
      "MadisonSquare Title 2011",
      "Apres une victiore par KO au 7 round face a l'australienne, cette bague represent ela preparation ardue que Ziriana a suivit en Afrique du Sud.",
      "assets/img/catalogue/MadisonSquare.png",
      "Or ",
      "Aqua Rubis",
      3500
    ),
    new Bague(
      "Las-Vegas Title 2012",
      "Apres une victiore par KO au 7 round face a l'australienne, cette bague represent ela preparation ardue que Ziriana a suivit en Afrique du Sud.",
      "assets/img/catalogue/vegas.png",
      "Or Noir",
      "Pink Rubis",
      3500
    ),
    new Bague(
      "London Title 2013",
      "Apres une victiore par KO au 7 round face a l'australienne, cette bague represent ela preparation ardue que Ziriana a suivit en Afrique du Sud.",
      "assets/img/catalogue/london.png",
      "Or ",
      "Black Ceramique",
      3000
    ),
    new Bague(
      "Dubai Title 2014",
      "Apres une victiore par KO au 7 round face a l'australienne, cette bague represent ela preparation ardue que Ziriana a suivit en Afrique du Sud.",
      "assets/img/catalogue/dubai.png",
      "Or ",
      "Pink Rubis",
      4500
    ),
    new Bague(
      "Oslo Title 2015",
      "Apres une victiore par KO au 7 round face a l'australienne, cette bague represent ela preparation ardue que Ziriana a suivit en Afrique du Sud.",
      "assets/img/catalogue/oslo.png",
      "White Ceramic",
      "Pink Rubis",
      4500
    ),
  ];
  personalizedBagues: Bague[]= [
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/or-rose.png",
      "Gold",
      "Rubis",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/or-noir.png",
      "Gold",
      "Mysterious",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/or-bleu.png",
      "Gold",
      "Rubis Lagoon",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-rose.png",
      "White Ceramic",
      "Rubis",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-noir.png",
      "White Ceramic",
      "Mysterious",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-bleu.png",
      "White Ceramic",
      "Rubis Lagoon",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-rose.png",
      "White Ceramic",
      "Rubis",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-noir.png",
      "White Ceramic",
      "Mysterious",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-bleu.png",
      "White Ceramic",
      "Rubis Lagoon",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-rose.png",
      "White Ceramic",
      "Rubis",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-noir.png",
      "White Ceramic",
      "Mysterious",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/blanc-bleu.png",
      "White Ceramic",
      "Rubis Lagoon",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/noir-rose.png",
      "Black Ceramic",
      "Rubis",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/noir-noir.png",
      "Black Ceramic",
      "Mysterious",
      5000
    ),
    new Bague(
      "Just for you",
      "Création personalisée",
      "assets/img/decote/noir-bleu.png",
      "Black Ceramic",
      "Rubis Lagoon",
      5000
    ),
  ];


selectedBague: Bague;

  constructor() { 
    this.setSelectedBague(this.bagues[0]);
  }

   // Récupérer les bagues
    getBagues(): Bague[] {
    return this.bagues;
  }

  // Modifier la baguet selectionnée
  setSelectedBague(bague: Bague): void {
    this.selectedBague =bague;
  }

  // Récupérer la bague selectionnée
  getSelectedBague(): Bague {
    return this.selectedBague;
  }



}
