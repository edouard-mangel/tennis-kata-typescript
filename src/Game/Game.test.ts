import { expect, test } from 'vitest'

class Game {
    private player1Score: number = 0;
    private player2Score: number = 0;



    scoreToDisplay(): string {
        if (this.player1Score > 0 && this.player2Score > 0) {
            return '15-15';
        }
        if (this.player1Score > 0) {
            return '15-0';
        }
        if (this.player2Score > 0) {
            return '0-15';
        }
        return '0-0';
    }

    player1Scored() {
        this.player1Score++;
    }

    player2Scored() {
        this.player2Score++;
    }
}

test('a new game shoud have a nil score to display', () => {
    // Assert / Then
    // Le jeu initialisé a comme score à afficher 0 - 0
    expect(new Game().scoreToDisplay()).toBe('0-0');
})

test('a game with player 1 who scored once should display 15 - 0', () => {
    // Given
    // Un jeu initialise
    const game = new Game();

    // When
    // Quand le joueur 1 marque un point
    game.player1Scored();

    // Then
    // Le score à afficher doit être 15-0
    expect(game.scoreToDisplay()).toBe('15-0');
});

test('a game with player 2 who scored once should display 0 - 15', () => {
    // Given
    const game = new Game();

    // When
    game.player2Scored();

    // Then
    expect(game.scoreToDisplay()).toBe('0-15');
});

test('a game with both players who scored once should display 15 - 15', () => {
    // Given
    const game = new Game();

    // When
    game.player1Scored();
    game.player2Scored();

    // Then
    expect(game.scoreToDisplay()).toBe('15-15');
});