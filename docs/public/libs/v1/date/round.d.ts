import type { TheDate, Unit } from "./types";
export type RoundUnit = Exclude<Unit, "millisecond">;
export declare function round(input: TheDate, unit?: RoundUnit): `date${number}-` | `date${number}+`;
