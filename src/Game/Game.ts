export class Game {
    SCORE_INCREMENT = 15;

    protected constructor(
        private player1Score: number,
        private player2Score: number
    ) {
    }

    public static NewGame(): Game {
        return new Game(0, 0);
    }

    scoreToDisplay(): string {
        if (this.player1Score === 3) {
            return `40-${this.SCORE_INCREMENT * this.player2Score}`;
        }
        return `${this.SCORE_INCREMENT * this.player1Score}-${this.SCORE_INCREMENT * this.player2Score}`;
    }

    player1Scored(): Game {
        return new Game(++this.player1Score, this.player2Score);
    }

    player2Scored() {
        return new Game(this.player1Score, ++this.player2Score);
    }
}