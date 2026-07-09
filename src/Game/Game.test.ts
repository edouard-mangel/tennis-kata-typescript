import { expect, test } from 'vitest'

class Game {
    SCORE_INCREMENT = 15;

    private constructor(
        private player1Score: number,
        private player2Score: number
    ) {
    }

    public static NewGame(): Game {
        return new Game(0, 0);
    }

    scoreToDisplay(): string {
        return `${this.SCORE_INCREMENT * this.player1Score}-${this.SCORE_INCREMENT * this.player2Score}`;
    }

    player1Scored(): Game {
        return new Game(++this.player1Score, this.player2Score);
    }

    player2Scored() {
        return new Game(this.player1Score, ++this.player2Score);
    }
}

test('a new game shoud have a nil score to display', () => {
    expect(Game.NewGame().scoreToDisplay()).toBe('0-0');
})

test('a game with player 1 who scored once should display 15 - 0', () => {
    expect((Game.NewGame().player1Scored()).scoreToDisplay()).toBe('15-0');
});

test('a game with player 2 who scored once should display 0 - 15', () => {
    expect((Game.NewGame().player2Scored()).scoreToDisplay()).toBe('0-15');
});

test('a game with both players who scored once should display 15 - 15', () => {
    expect((Game.NewGame()
        .player1Scored()
        .player2Scored()).scoreToDisplay()).toBe('15-15');
});

test('a game with player 1 who scored twice should display 30 - 0', () => {
    expect(Game.NewGame().player1Scored().player1Scored().scoreToDisplay()).toBe('30-0');
});