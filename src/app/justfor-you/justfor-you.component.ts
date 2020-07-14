import { Component, OnInit } from '@angular/core';
import { Bague } from '../models/bague';
import { BaguesService } from '../services/bagues.service';
import { Identifiers } from '@angular/compiler';



@Component({
  selector: 'app-justfor-you',
  templateUrl:"./justfor-you.component.html",
  styleUrls: [ "./justfor-you.component.css" ]
})
export class JustforYouComponent implements OnInit {


  
  selectedPersonalizedBague: Bague;
  messageAlert: string;

  constructor() { }

  ngOnInit(): void {
    
    this.selectedPersonalizedBague = new Bague("", "","assets/img/justforYou/neutral.png","","",0);
  }
    

  SimulateBague(ring:String, stone: String) {    
 
      if(ring=='Gold' && stone=='Rubis'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/or-rose.png";}
        else if(ring=='Gold' && stone=='Mysterious'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/or-noir.png";}
        else if(ring=='Gold' && stone=='Rubis Lagoon'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/or-bleu.png";}
        else if(ring=='White Ceramic' && stone=='Rubis'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/blanc-rose.png";}
        else if(ring=='White Ceramic' && stone=='Mysterious'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/blanc-noir.png";}
        else if(ring=='White Ceramic' && stone=='Rubis Lagoon'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/blanc-bleu.png";}
        else if(ring=='Black Ceramic' && stone=='Rubis'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-rose.png";}
        else if(ring=='Black Ceramic' && stone=='Mysterious'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-noir.png";}
        else if(ring=='Black Ceramic' && stone=='Rubis Lagoon'){this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-bleu.png";}
    else{
      this.messageAlert ="please choose two materials at least ;)" ;       
    }

  }

  /*  fct pour le dropDownBox
  displayPersonalizedBague(ringColor: String) {
    if(ringColor=='Gold')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/or-noir.png";
    }
    else if(ringColor=='White Ceramic')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/blanc-bleu.png";
    }
    else if(ringColor =='Black Ceramic')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-noir.png";
    }
    else { this.selectedPersonalizedBague.urlPhoto = "assets/img/justforYou/neutral.png";}
  }

  displayPersonalizedBague2(stoneColor: String) {
    if(stoneColor=='Rubis')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-rose.png";
    }
    else if(stoneColor=='Mysterious')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-noir.png";
    }
    else if(stoneColor =='Rubis Lagoon')
    {
      this.selectedPersonalizedBague.urlPhoto = "assets/img/decote/noir-bleu.png";
    }
    else { this.selectedPersonalizedBague.urlPhoto = "assets/img/justforYou/neutral.png";}
  }
  */
}
