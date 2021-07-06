import { Component, OnInit } from '@angular/core';
import { AshariEmbeld } from '../models/races/ashari-embeld';
import { CharacterBuilderService } from './character-builder.service';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss']
})
export class CharacterBuilderComponent implements OnInit {

  constructor(public characterBuilder: CharacterBuilderService) { }

  ngOnInit(): void {
    const lurfadrinoriel = this.characterBuilder.createBaseCharacter('Lurfadrinoriel', AshariEmbeld.RACE_NAME);
    console.log(lurfadrinoriel)
    // console.log('Inner Spirit test:', lurfadrinoriel.testInnerSpirit(lurfadrinoriel.innerSpirits.adaj))

    // console.log(random);
    // random.generateInteger(1, 50, 10, "Decimal").then(response => {
    //   console.log(response); // => Array<number>[10]
    // }).catch(error => {
    //   console.log(error);
    // });
    // this.d6(2);
  }
}
