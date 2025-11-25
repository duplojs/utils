import { type Digit } from "@scripts/string";

type TenEven = "" | "2" | "4" | "6" | "8";
type OddTen = "1" | "3" | "5" | "7" | "9";
type MultipleOf4 = `${TenEven}${"0" | "4" | "8"}` | `${OddTen}${"2" | "6"}`;
type MultipleOf100 = `${Exclude<Digit, "0">}00`;

type MultipleOf400 = `${Exclude<MultipleOf4, "0">}00`;

export type IsLeapYear<
	I extends `${number}`,
> = I extends `${number | ""}${MultipleOf4}`
	? I extends `${number | ""}${MultipleOf100}`
		? I extends `${number | ""}${MultipleOf400}`
			? true
			: false
		: true
	: false;
