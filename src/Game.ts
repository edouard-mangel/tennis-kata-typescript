export class Game {
  playersScores: [number, number];
  playerAdvantage: number | null;
  winner: number | null;
  

  protected constructor(player1Score: number, player2Score: number) {
    this.playersScores = [player1Score, player2Score];
    this.playerAdvantage = null;
    this.winner = null;
  }

 

  

  

  public getWinner(): number | null {
    return this.winner;
  }
}