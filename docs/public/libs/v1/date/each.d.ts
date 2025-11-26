import type { TheDate, Unit } from "./types";
export declare function each(range: {
    start: TheDate;
    end: TheDate;
}, unit?: Unit): Generator<`date${number}-` | `date${number}+`, unknown, unknown>;
