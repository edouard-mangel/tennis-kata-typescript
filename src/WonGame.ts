import { Game } from "./Game";

export class WonGame {
  
  constructor(private playerWinner: number) {

  }

  public getScore(): string {
    return `player ${this.playerWinner} wins`;
  }

  public setPointToPlayer(): Game {
    throw new Error();
  }
}