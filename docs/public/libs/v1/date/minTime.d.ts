import { type AnyTuple } from "../common";
import { type TheTime } from "./types";
export declare function minTime<GenericInput extends AnyTuple<TheTime>>(input: GenericInput): `time${number}-` | `time${number}+`;
