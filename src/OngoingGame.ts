import { DeuceGame } from "./DeuceGame";

export class OnGoingGame {
  scoreToText: Record<number, string> = {
    0: '0',
    1: '15',
    2: '30',
    3: '40',
  };

  private constructor (private player1Score:number, private player2Score:number) {
  }


  public static newGame() {
    return new OnGoingGame(0,0);
  }

  public setPointToPlayer(player: number): OnGoingGame | DeuceGame {
    const newPlayer1Score = player === 1 ?  this.player1Score+ 1 : this.player1Score;
    const newPlayer2Score = player === 2 ?  this.player2Score+ 1 : this.player2Score;

    // equality 40-40
    if (newPlayer1Score === newPlayer2Score && newPlayer1Score === 3) {
      return new DeuceGame();
    }
    return new OnGoingGame(newPlayer1Score, newPlayer2Score);
  }

  public getScore(): string {
    return `${this.scoreToText[this.player1Score]}-${this.scoreToText[this.player2Score]}`;
  }
}