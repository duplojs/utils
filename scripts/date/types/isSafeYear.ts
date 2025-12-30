import { type Adaptor, type AnyTuple } from "@scripts/common";
import type * as DString from "@scripts/string";
import type * as DArray from "@scripts/array";
import type * as DNumber from "@scripts/number";

interface GreaterTable {
	positive: {
		greater: [
			"3" | "4" | "5" | "6" | "7" | "8" | "9",
			"8" | "9",
			"6" | "7" | "8" | "9",
			"8" | "9",
			"6" | "7" | "8" | "9",
			"",
		];
		equal: [
			"2",
			"7",
			"5",
			"7",
			"5",
			"9",
		];
	};
	negative: {
		greater: [
			"3" | "4" | "5" | "6" | "7" | "8" | "9",
			"8" | "9",
			"2" | "3" | "4" | "5" | "6" | "7" | "8" | "9",
			"9",
			"3" | "4" | "5" | "6" | "7" | "8" | "9",
			"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9",
		];
		equal: [
			"2",
			"7",
			"1",
			"8",
			"2",
			"0",
		];
	};
}

type CheckSplitYear<
	GenericSplitYear extends AnyTuple<DString.Number>,
	GenericGreaterTable extends AnyTuple<string>,
	GenericEqualTable extends AnyTuple<string>,
> = GenericSplitYear[0] extends GenericGreaterTable[0]
	? false
	: GenericSplitYear[0] extends GenericEqualTable[0]
		? [
			DArray.ShiftTuple<GenericSplitYear>,
			DArray.ShiftTuple<GenericGreaterTable>,
			DArray.ShiftTuple<GenericEqualTable>,
		] extends [
			infer InferredSplitYear extends readonly DString.Number[],
			infer InferredGreaterTable extends readonly string[],
			infer InferredEqualTable extends readonly string[],
		]
			? InferredSplitYear extends AnyTuple<DString.Number>
				? CheckSplitYear<
					InferredSplitYear,
					Adaptor<
						InferredGreaterTable,
						AnyTuple<string>
					>,
					Adaptor<
						InferredEqualTable,
						AnyTuple<string>
					>
				>
				: true
			: never
		: true;

export type IsSafeYear<
	GenericYears extends number,
> = DNumber.Absolute<GenericYears> extends infer InferredYear extends number
	? DString.StringLength<`${InferredYear}`> extends infer InferredLength extends number
		? InferredLength extends 1 | 2 | 3 | 4 | 5 | 6
			? InferredLength extends 6
				? DString.Split<`${InferredYear}`, ""> extends infer InferredSplitYear extends AnyTuple<DString.Number>
					? CheckSplitYear<
						InferredSplitYear,
						DNumber.IsPositive<GenericYears> extends true
							? GreaterTable["positive"]["greater"]
							: GreaterTable["negative"]["greater"],
						DNumber.IsPositive<GenericYears> extends true
							? GreaterTable["positive"]["equal"]
							: GreaterTable["negative"]["equal"]
					>
					: false
				: true
			: false
		: never
	: never;
