export class Game {
  playersScores: [number, number];
  playerAdvantage: number | null;
  winner: number | null;
  scoreToText: Record<number, string> = {
    0: '0',
    1: '15',
    2: '30',
    3: '40'
  }

  constructor() {
    this.playersScores = [0, 0];
    this.playerAdvantage = null;
    this.winner = null;
  }

  public setPointToPlayer(playerIndex: number) {
    // equality 40-40
    if(this.playersScores[0] === this.playersScores[1] && this.playersScores[0] === 3) {
      // reset advantage
      if (this.playerAdvantage !== null && this.playerAdvantage !== playerIndex) {
          this.playerAdvantage = null;
          return;
      }
      //set winner
      if (this.playerAdvantage !== null && this.playerAdvantage == playerIndex) {
          this.winner = playerIndex;
          return;
      }
      // give advantage
      this.playerAdvantage = playerIndex;
      return;
    }
    this.playersScores[playerIndex] = typeof this.playersScores[playerIndex] === 'number' ? this.playersScores[playerIndex]+1 : 0;
  }

  public getScore(): string {
    if(
      this.playersScores[0] === this.playersScores[1] 
      && this.playersScores[0] === 3 
      && this.playerAdvantage === null
    ) {
      return `${this.scoreToText[3]}A`;
    }
    return `${this.scoreToText[this.playersScores[0]]}${this.playerAdvantage === 0 ? 'A' : ''}-${this.scoreToText[this.playersScores[1]]}${this.playerAdvantage === 1 ? 'A' : ''}`;
  }

  public getWinner(): number | null {
    return this.winner;
  }
}