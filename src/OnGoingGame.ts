import { DeuceGame } from "./DeuceGame";
import type { Player } from './Player.types'
import { WonGame } from "./WonGame";

export class OnGoingGame {
  static readonly scoreToText: Record<number, string> = {
    0: '0',
    1: '15',
    2: '30',
    3: '40',
  };

  private constructor (private player1Score:number, private player2Score:number) {}

  public static newGame() {
    return new OnGoingGame(0,0);
  }

  public setPointToPlayer(player: Player): OnGoingGame | DeuceGame | WonGame {
    const newPlayer1Score = player === 1 ? this.player1Score+ 1 : this.player1Score;
    const newPlayer2Score = player === 2 ? this.player2Score+ 1 : this.player2Score;
    
    if(newPlayer1Score > 3 || newPlayer2Score > 3) {
      return new WonGame(player);
    }

    // equality 40-40
    if (newPlayer1Score === newPlayer2Score && newPlayer1Score === 3) {
      return new DeuceGame();
    }
    
    return new OnGoingGame(newPlayer1Score, newPlayer2Score);
  }

  public getScore(): string {
    return `${OnGoingGame.scoreToText[this.player1Score]}-${OnGoingGame.scoreToText[this.player2Score]}`;
  }
}