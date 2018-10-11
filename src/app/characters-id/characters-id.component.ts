import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters-id',
  templateUrl: './characters-id.component.html',
  styleUrls: ['./characters-id.component.css']
})
export class CharactersIdComponent implements OnInit {
  id: string;
  character: any;
  keys = Object.keys;

  constructor(private potterService: PotterService, private rout: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.id = id;
      this.potterService.getChatacter(id).subscribe((character: any[]) => {
        this.character = character;
        console.log(character);
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
