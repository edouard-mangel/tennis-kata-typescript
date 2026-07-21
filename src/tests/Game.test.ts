import { OnGoingGame } from '../OngoingGame';

describe('Game', () => {
  it('should display the default score', () => {
    const game = OnGoingGame.newGame();
    expect(game.getScore()).toBe('0-0');
  });

  it('should display 0-15 score', () => {
    const game = OnGoingGame.newGame().setPointToPlayer(2);
    expect(game.getScore()).toBe('0-15');
  });

  it('should display 15-0 score', () => {
    const game = OnGoingGame.newGame().setPointToPlayer(1);
    expect(game.getScore()).toBe('15-0');
  });

  it('should display 15-15 score', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(1);
    expect(game.getScore()).toBe('15-15');
  });

  it('should display 0-30 score', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2);
    expect(game.getScore()).toBe('0-30');
  });

  it('should display 40-40 score', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1);
    expect(game.getScore()).toBe('40A');
  });

  it('should give advantage to player 1', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1);
    expect(game.getScore()).toBe('advantage player 1');
  });

  it('should give advantage to player 2', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(2);
    expect(game.getScore()).toBe('advantage player 2');
  });

  it('should undo advantage to player 1', () => {
    let game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1);
    expect(game.getScore()).toBe('advantage player 1');
    game = game.setPointToPlayer(2);
    expect(game.getScore()).toBe('40A');
  });

   it('should make player 2 win the game', () => {
    const game = OnGoingGame.newGame()
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(2)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(1)
    .setPointToPlayer(2)
    .setPointToPlayer(2);
    expect(game.getScore()).toBe('player 2 wins');
  });
})