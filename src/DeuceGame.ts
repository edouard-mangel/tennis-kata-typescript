import { AdvantageGame } from "./AdvantageGame";
import { Player } from "./Player.types";

export class DeuceGame {
  public getScore(): string {
    return `40A`;
  }

  public setPointToPlayer(player: Player): AdvantageGame {
    return new AdvantageGame(player);
  }
}