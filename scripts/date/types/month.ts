import { type Digit } from "@scripts/string";

export type Month = `0${Exclude<Digit, "0">}` | "10" | "11" | "12";

export type Day29 = Exclude<`${"0" | "1" | "2"}${Digit}`, "00">;

export type Day30 = Day29 | "30";

export type Day31 = Day30 | "31";

export type MonthWithDay29 = "02";
export type MonthWithDay30 = "04" | "06" | "09" | "11";
export type MonthWithDay31 = "01" | "03" | "05" | "07" | "08" | "10" | "12";

export type MonthWithDay = Month extends infer InferredMonth ?
	InferredMonth extends MonthWithDay29
		? `${InferredMonth}-${Day29}`
		: InferredMonth extends MonthWithDay30
			? `${InferredMonth}-${Day30}`
			: InferredMonth extends MonthWithDay31
				? `${InferredMonth}-${Day31}`
				: never
	: never;
