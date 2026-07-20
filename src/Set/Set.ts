export class Set {
    protected constructor(
        private player1Games: number,
        private player2Games: number
    ) {
    }

    public static NewSet() {
        return new Set(0, 0);
    };

    public player1Game() {
        return new Set(++this.player1Games, this.player2Games);
    }

    public player2Game() {
        return new Set(this.player1Games, ++this.player2Games);
    }

    public setsToDisplay(): string {
        return `${this.player1Games}-${this.player2Games}`;
    }
}