import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotterService } from '../potter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  house: string;
  characters: any[];
  constructor(private rout: ActivatedRoute, private router: Router, private potterService: PotterService) {}

  ngOnInit() {
    this.rout.params.subscribe(({ house }) => {
      this.house = house;
      this.potterService.getChatacters(house).subscribe((characters: any[]) => {
        this.characters = characters;
        console.log(characters);
      });
    });
  }
  toCharacter(id) {
    this.router.navigate(['character/', id]);
  }
}
