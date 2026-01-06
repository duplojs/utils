import { type AnyTuple } from "../common";
import { type TheTime } from "./types";
export declare function maxTime<GenericInput extends AnyTuple<TheTime>>(input: GenericInput): `time${number}-` | `time${number}+`;
