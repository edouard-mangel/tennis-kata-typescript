import { AdvantageGame } from "./AdvantageGame";
import { Game } from "./Game";

export class DeuceGame {
  public getScore(): string {
    return `40A`;
  }

  public setPointToPlayer(player: number): Game {

    return new AdvantageGame(player);
  }
}