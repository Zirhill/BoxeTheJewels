import { Component, OnInit } from '@angular/core';
import { Bague } from '../models/bague';
import { Router } from '@angular/router';
import { BaguesService } from '../services/bagues.service';

@Component({
  selector: 'app-gallery',
  templateUrl:"./gallery.component.html",
  styleUrls: [ "./gallery.component.css" ]
})
export class GalleryComponent implements OnInit {
  bagues: Bague[];
  constructor(
    private router: Router,
    private baguesService: BaguesService
  ) { }

  ngOnInit(): void {
    this.stockBagues();
  }

  stockBagues(): void {
    this.bagues = this.baguesService.getBagues();
  }

  navigateToDetails(bague: Bague): void {
    this.baguesService.setSelectedBague(bague);
    this.router.navigateByUrl("gallery/detail");
  }

}
