import { Player } from "./Player.types";

export class WonGame {
  
  constructor(private playerWinner: Player) {

  }

  public getScore(): string {
    return `player ${this.playerWinner} wins`;
  }

  public setPointToPlayer(): WonGame {
    throw new Error('impossible');
  }
}