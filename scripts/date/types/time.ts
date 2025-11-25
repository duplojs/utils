import { type Digit } from "@scripts/string";

export type Hour = `${"0" | "1"}${Digit}` | "20" | "21" | "22" | "23";

export type Minute = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;

export type Second = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;

export type Millisecond = `${Digit}${Digit}${Digit}`;
