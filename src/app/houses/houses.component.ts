import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: any[];

  constructor(private potterService: PotterService, private router: Router) {}

  showHouses() {
    this.potterService.getHouses().subscribe((houses: any[]) => {
      console.log(houses);
      this.houses = houses;
    });
  }

  ngOnInit() {
    this.showHouses();
  }

  /*goToCharacters(house) {
    this.router.navigate(['characters', house]);
  }*/
}
