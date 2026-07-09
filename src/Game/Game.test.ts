import { expect, test } from 'vitest'

class Game {
    private constructor(private player1Score: number, private player2Score: number) {
    }

    public static NewGame(): Game {
        return new Game(0, 0);
    }

    scoreToDisplay(): string {
        if (this.player1Score > 0 && this.player2Score > 0) {
            return '15-15';
        }
        if (this.player1Score > 1) {
            return '30-0';
        }
        if (this.player1Score > 0) {
            return '15-0';
        }
        if (this.player2Score > 0) {
            return '0-15';
        }
        return '0-0';
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