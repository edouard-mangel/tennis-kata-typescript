import { Game } from '../Game';

describe('Game', () => {
  it('should display the default score', () => {
    const game = new Game();
    expect(game.getScore()).toBe('0-0');
  });

  it('should display 0-15 score', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    expect(game.getScore()).toBe('0-15');
  });

  it('should display 15-0 score', () => {
    const game = new Game();
    game.setPointToPlayer(0);
    expect(game.getScore()).toBe('15-0');
  });

  it('should display 15-15 score', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    expect(game.getScore()).toBe('15-15');
  });

  it('should display 0-30 score', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    expect(game.getScore()).toBe('0-30');
  });

  it('should display 40-40 score', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    expect(game.getScore()).toBe('40A');
  });

  it('should give advantage to player 1', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    expect(game.getScore()).toBe('40A-40');
  });

  it('should give advantage to player 2', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(1);
    expect(game.getScore()).toBe('40-40A');
  });

  it('should undo advantage to player 1', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    expect(game.getScore()).toBe('40A-40');
    game.setPointToPlayer(1);
    expect(game.getScore()).toBe('40A');
  });

   it('should make player 1 win the game', () => {
    const game = new Game();
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(0);
    game.setPointToPlayer(1);
    game.setPointToPlayer(1);
    expect(game.getWinner()).toBe(1);
  });
})