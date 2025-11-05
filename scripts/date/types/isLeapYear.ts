import type { Digit } from "@scripts/string";

type NonZeroDigit = Exclude<Digit, "0">;
type EvenDigit = "" | "2" | "4" | "6" | "8";
type OddDigit = "1" | "3" | "5" | "7" | "9";

export type ExtractYear<
	GenericYear extends `${"" | "-"}${number}`,
> = GenericYear extends `-${infer InferedAbsYear extends `${number}`}` ? InferedAbsYear : GenericYear;

export type IsLeapYear<
	GenericYear extends `${"" | "-"}${number}`,
> = ExtractYear<GenericYear> extends infer InferedYear extends string
	? InferedYear extends `${string}${EvenDigit}${0 | 4 | 8}` | `${string}${OddDigit}${2 | 6}`
		? InferedYear extends `${string}${NonZeroDigit}00`
			? InferedYear extends `${string}${"4" | "8"}00`
				? true
				: false
			: true
		: false
	: never;
