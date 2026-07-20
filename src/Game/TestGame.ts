import { Game } from './Game';

export class TestGame extends Game {
    constructor(player1Score: number, player2Score: number) {
        super(player1Score, player2Score);
    }
}

export class GameBuilder {
    public static OnGoingGame(player1Score: number, player2Score: number): Game {
        return new TestGame(player1Score, player2Score);
    }
    public static DeuceGame(): Game {
        return new TestGame(3, 3);
    }
}