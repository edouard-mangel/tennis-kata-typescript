import { Game } from "./Game";

export class DeuceGame {
  public getScore(): string {
    return `40A`;
  }

  public setPointToPlayer(): Game {
    return this;
  }
}