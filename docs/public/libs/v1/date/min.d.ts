import { type AnyTuple } from "../common";
import { type TheDate } from "./types";
export declare function min<GenericInput extends AnyTuple<TheDate>>(input: GenericInput): `date${number}-` | `date${number}+`;
