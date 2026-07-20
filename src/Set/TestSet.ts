import { Set } from "./Set";

export class TestSet extends Set {
    constructor(
        player1Games: number,
        player2Games: number,
    ) {
        super(player1Games, player2Games);
    }
}
