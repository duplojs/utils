import { type AnyTuple } from "../common";
import { type TheDate } from "./types";
export declare function max<GenericInput extends AnyTuple<TheDate>>(input: GenericInput): `date${number}-` | `date${number}+`;
