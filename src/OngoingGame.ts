import { Game } from "./Game";

export class OnGoingGame implements Game {
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

  public setPointToPlayer(playerIndex: number) {
    // equality 40-40
    if (this.player1Score === this.player2Score && this.player1Score === 3) {
      return;
    }
    if(playerIndex === 0) {
      this.player1Score++;
    } else {
      this.player2Score++;
    }
  }

  public getScore(): string {
    if (
      this.player1Score === this.player2Score &&
      this.player1Score === 3
    ) {
      return `${this.scoreToText[3]}A`;
    }
    return `${this.scoreToText[this.player1Score]}-${this.scoreToText[this.player2Score]}`;
  }

  
}