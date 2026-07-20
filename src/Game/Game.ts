export class Game {
    POINTS_MATRIX: Record<number, string> = {
        0: '0',
        1: '15',
        2: '30',
        3: '40',
    };

    protected constructor(
        private player1Score: number,
        private player2Score: number,
    ) {
    }

    public static NewGame(): Game {
        return new Game(0, 0);
    }

    scoreToDisplay(): string {
        const isPlayer1Winner = this.player1Score >= 4 && this.player1Score - this.player2Score >= 2;
        if (isPlayer1Winner) {
            return 'winner: player1';
        }

        const isPlayer2Winner = this.player2Score >= 4 && this.player2Score - this.player1Score >= 2;
        if (isPlayer2Winner) {
            return 'winner: player2';
        }

        const isPlayer1Advantage = this.player1Score > this.player2Score && this.player1Score >= 4;
        if (isPlayer1Advantage) {
            return 'A-40';
        }

        const isPlayer2Advantage = this.player2Score > this.player1Score && this.player2Score >= 4;
        if (isPlayer2Advantage) {
            return '40-A';
        }

        const isDeuce = this.player1Score >= 3 && this.player2Score >= 3 && this.player1Score === this.player2Score;
        if (isDeuce) {
            return '40-40';
        }

        return `${this.POINTS_MATRIX[this.player1Score]}-${this.POINTS_MATRIX[this.player2Score]}`
    }

    player1Scored(): Game {
        return new Game(++this.player1Score, this.player2Score);
    }

    player2Scored(): Game {
        return new Game(this.player1Score, ++this.player2Score);
    }
}