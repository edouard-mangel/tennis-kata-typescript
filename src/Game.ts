import { AdvantageGame } from "./AdvantageGame";
import { DeuceGame } from "./DeuceGame";
import { OnGoingGame } from "./OngoingGame";

export type Game = OnGoingGame | DeuceGame | AdvantageGame;
