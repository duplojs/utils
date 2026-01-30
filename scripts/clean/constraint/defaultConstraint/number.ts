import { Number } from "@scripts/clean/primitive";
import { type GetConstraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { type OnlyLiteralNumber } from "@scripts/common";

/**
 * {@include clean/Int/index.md}
 */
export const Int = createConstraint(
	"int",
	Number,
	DDataParser.checkerInt(),
);
export type Int = GetConstraint<typeof Int>;

/**
 * {@include clean/Positive/index.md}
 */
export const Positive = createConstraint(
	"positive",
	Number,
	DDataParser.checkerNumberMin(1),
);
export type Positive = GetConstraint<typeof Positive>;

/**
 * {@include clean/Negative/index.md}
 */
export const Negative = createConstraint(
	"negative",
	Number,
	DDataParser.checkerNumberMax(-1),
);
export type Negative = GetConstraint<typeof Negative>;

/**
 * {@include clean/NumberMin/index.md}
 */
export function NumberMin<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
) {
	return createConstraint(
		`number-min-${value}`,
		Number,
		DDataParser.checkerNumberMin(value),
	);
}

export type NumberMin<
	GenericValue extends number,
> = ReturnType<typeof NumberMin<GenericValue>>;

/**
 * {@include clean/NumberMax/index.md}
 */
export function NumberMax<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
) {
	return createConstraint(
		`number-max-${value}`,
		Number,
		DDataParser.checkerNumberMax(value),
	);
}

export type NumberMax<
	GenericValue extends number,
> = ReturnType<typeof NumberMax<GenericValue>>;
