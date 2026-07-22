import { DeuceGame } from "./DeuceGame";
import { Player } from "./Player.types";
import { WonGame } from "./WonGame";

export class AdvantageGame {
  
  constructor(private playerAdvantage: Player) {
  }

  public getScore(): string {
    return `advantage player ${this.playerAdvantage}`;
  }

  public setPointToPlayer(player: Player): DeuceGame | WonGame {
    if(player !== this.playerAdvantage) {
      return new DeuceGame();
    }
    return new WonGame(player);
  }
}