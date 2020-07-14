import { Component, OnInit } from '@angular/core';
import { Bague } from '../models/bague';
import { Router } from '@angular/router';
import { BaguesService } from '../services/bagues.service';

@Component({
  selector: 'app-detail-bague',
  templateUrl: "./detail-bague.component.html",
  styleUrls: [ "./detail-bague.component.html" ]
})
export class DetailBagueComponent implements OnInit {
  selectedBague: Bague;
  
  constructor(
    private router: Router,
    private baguesService: BaguesService
  ) { }

  ngOnInit(): void {
    this.getselectedBagueSingle();
  }

  getselectedBagueSingle(): void {
    this.selectedBague = this.baguesService.getSelectedBague();
  }

  navigateToList(): void {
    this.router.navigateByUrl("gallery")
  }

}
