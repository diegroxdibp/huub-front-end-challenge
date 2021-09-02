import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CaracteristicsBuilder } from '../characteristics-builder';
import { Character } from '../models/character';
import { Race } from '../models/race';
import { AshariEmbeld } from '../models/races/ashari-embeld';
import { CharacterBuilderService } from './character-builder.service';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss']
})
export class CharacterBuilderComponent implements OnInit {
  @ViewChild('race') race: ElementRef;
  @ViewChild('name') name: ElementRef;

  nameInput;
  selectedRace: Race;
  character: Character;
  characteristicsBuilder: CaracteristicsBuilder;
  constructor(public characterBuilder: CharacterBuilderService) { }


  ngOnInit(): void {
    const lurfadrinoriel = this.characterBuilder.createBaseCharacter('Lurfadrinoriel', AshariEmbeld.RACE_NAME);
    console.log(lurfadrinoriel);
  }
  selectRace(name: string, race: string): Character {
    if (race === '-1') {
      this.character = null;
      return;
    }
    const baseCharacter = this.characterBuilder.createBaseCharacter(name, race);
    this.character = baseCharacter;
    return baseCharacter;
  }

  test(): void {

  }
}
