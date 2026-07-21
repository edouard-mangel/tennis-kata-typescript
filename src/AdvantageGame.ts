import { DeuceGame } from "./DeuceGame";
import { Game } from "./Game";
import { WonGame } from "./WonGame";

export class AdvantageGame {
  
  constructor(private playerAdvantage: number) {
  }

  public getScore(): string {
    return `advantage player ${this.playerAdvantage}`;
  }

  public setPointToPlayer(player: number): Game {
    if(player !== this.playerAdvantage) {
      return new DeuceGame();
    }
    return new WonGame(player);
  }
}