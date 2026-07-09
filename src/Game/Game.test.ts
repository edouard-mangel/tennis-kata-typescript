import { expect, test } from 'vitest'

class Game {
    player1Score: number = 0;



    scoreToDisplay(): string {
        if (this.player1Score > 0) {
            return '15-0';
        }
        return '0-0';
    }

    player1Scored() {
        this.player1Score++;
    }

}

test('a new game shoud have a nil score to display', () => {
    // Assert / Then
    // Le jeu initialisé a comme score à afficher 0 - 0
    expect(new Game().scoreToDisplay()).toBe('0-0');
})

test('TODO rename', () => {
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