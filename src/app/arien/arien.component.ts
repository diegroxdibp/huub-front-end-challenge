import { Character } from './models/character';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AshariEmbeld } from './models/races/ashari-embeld';
import { Race } from './models/race';
import { CharacterBuilderService } from './character-builder/character-builder.service';
import { CaracteristicsBuilder } from './characteristics-builder';

@Component({
  selector: 'app-arien',
  templateUrl: './arien.component.html',
  styleUrls: ['./arien.component.scss']
})
export class ArienComponent implements OnInit {
  @ViewChild('race') race: ElementRef;
  @ViewChild('name') name: ElementRef;

  nameInput;
  selectedRace: Race;
  character: Character;
  characteristicsBuilder: CaracteristicsBuilder;
  constructor(public characterBuilder: CharacterBuilderService) { }

  ngOnInit(): void {
    this.characteristicsBuilder = new CaracteristicsBuilder();
    const lurfadrinoriel = this.characterBuilder.createBaseCharacter('Lurfadrinoriel', AshariEmbeld.RACE_NAME);
    console.log(lurfadrinoriel);
    // console.log('Inner Spirit test:', lurfadrinoriel.testInnerSpirit(lurfadrinoriel.innerSpirits.adaj))
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
