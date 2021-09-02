import { HeightenedSenses } from '../../feats/heightened-senses';
import { RadiantBody } from '../../feats/radiant-body';
import { SpecialSenses } from '../../feats/special-senses';
import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class AshariEmbeld extends Race {

  public static RACE_NAME = 'Ashari-Embeld';
  public static RACE_BASE = new RaceBaseAttributes(6, 7, 6, 7, 6);
  public static RACE_FEATS =
    [new RadiantBody(), new SpecialSenses('Radar', true), new HeightenedSenses('Hearing', true), new HeightenedSenses('Vision', true), ];
  public static RACE_DESCRIPTION = 'Os elfos da chama ou Ashari-embeld foram agraciados pelo desejo de Brannar, o grande gênio do fogo. Eles habitam as Florestas de Quël’aranië e na Savana Fértil, próximos do Deserto da Dádiva. São no geral uma espécie combatente e que por muitas vezes faz a linha de frente na batalha élfica contra os Orcs do norte. Não veem as sub-raças como algo inferior, mas como expressões da grandeza de Ëruil, aceitando todos os elfos como iguais e superiores aos demais povos, mais próximos da dádiva da imortalidade. O deus herói dos ashari-embeld é Ashýr Naruil, o primeiro dos elfos das chamas e que teve contato direto com Brannar, o grande gênio do fogo.Ashýr inflama os demais elfos a superarem suas próprias capacidades e vencerem os desafios deixados pelos grandes gênios no mundo, explicando que esta é a forma mais rápida de se conseguir a imortalidade e os tesouros que Ëruil prometeu.';

  constructor() {
    super(AshariEmbeld.RACE_NAME, AshariEmbeld.RACE_BASE);
  }

  getRaceName(): string {
    return AshariEmbeld.RACE_NAME;
  }
}
