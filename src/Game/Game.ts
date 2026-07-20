export class Game {
    POINTS_MATRIX = {
        0: '0',
        1: '15',
        2: '30',
        3: '40',
        4: 'A',
    };

    protected constructor(
        private player1Score: number,
        private player2Score: number
    ) {
    }

    public static NewGame(): Game {
        return new Game(0, 0);
    }

    scoreToDisplay(): string {
        return `${this.POINTS_MATRIX[this.player1Score]}-${this.POINTS_MATRIX[this.player2Score]}`
    }

    player1Scored(): Game {
        return new Game(++this.player1Score, this.player2Score);
    }

    player2Scored() {
        return new Game(this.player1Score, ++this.player2Score);
    }
}