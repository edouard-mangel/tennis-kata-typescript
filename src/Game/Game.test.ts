import { expect, test } from 'vitest'

class Game {
    scoreToDisplay() {
        return '0-0';
    }
}

test('a new game shoud have a nil score to display', () => {
    // Assert / Then
    // Le jeu initialisé a comme score à afficher 0 - 0
    expect(new Game().scoreToDisplay()).toBe('0-0');
})