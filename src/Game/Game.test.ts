import { expect, test } from 'vitest'
import { Game } from './Game';
import { GameBuilder, TestGame } from './TestGame';

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
    expect(GameBuilder.OnGoingGame(2, 0).scoreToDisplay()).toBe('30-0');
});
test('a game with player 1 who scored three time should display 40 - 0', () => {
    expect(GameBuilder.OnGoingGame(3, 0).scoreToDisplay()).toBe('40-0');
});
test('a game with both players scoring three times should display 40 - 40', () => {
    expect(GameBuilder.OnGoingGame(3, 3).scoreToDisplay()).toBe('40-40');
});
test('a deuce game should display 40 - 40', () => {
    expect(GameBuilder.DeuceGame().scoreToDisplay()).toBe('40-40');
})
test('a deuce game with player1 advantage should display A - 40', () => {
    // Given
    // A deuce game where player1 is in advantage position
    const game = GameBuilder.DeuceGame();
    // When
    game.player1Scored();
    // Then
    expect(game.scoreToDisplay()).toBe('A-40');
});

test('', () => {

});