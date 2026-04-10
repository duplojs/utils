import { Number } from "@scripts/clean/primitive";
import { type ConstraintHandler, type GetConstraint, createConstraint } from "../base";
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
	DDataParser.checkerNumberMin(0),
);
export type Positive = GetConstraint<typeof Positive>;

/**
 * {@include clean/Negative/index.md}
 */
export const Negative = createConstraint(
	"negative",
	Number,
	DDataParser.checkerNumberMax(0),
);
export type Negative = GetConstraint<typeof Negative>;

export type NumberMinHandlerInternal<
	GenericValue extends number = number,
> = Extract<
	ConstraintHandler<
	`number-min-${GenericValue}`,
		number,
		readonly [DDataParser.DataParserCheckerNumberMin],
		never
	>,
	any
>;

export type NumberMinInternal<
	GenericValue extends number = number,
> = GetConstraint<
	NumberMinHandlerInternal<GenericValue>
>;

/**
 * {@include clean/NumberMin/index.md}
 */
export function NumberMin<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
): NumberMinHandlerInternal<GenericValue> {
	return createConstraint(
		`number-min-${value as any}`,
		Number,
		DDataParser.checkerNumberMin(value),
	);
}

export type NumberMin<
	GenericValue extends number,
> = GetConstraint<
	ReturnType<
		typeof NumberMin<GenericValue>
	>
>;

export type NumberMaxHandlerInternal<
	GenericValue extends number = number,
> = Extract<
	ConstraintHandler<
	`number-max-${GenericValue}`,
		number,
		readonly [DDataParser.DataParserCheckerNumberMax],
		never
	>,
	any
>;

export type NumberMaxInternal<
	GenericValue extends number = number,
> = GetConstraint<
	NumberMaxHandlerInternal<GenericValue>
>;

/**
 * {@include clean/NumberMax/index.md}
 */
export function NumberMax<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
): NumberMaxHandlerInternal<GenericValue> {
	return createConstraint(
		`number-max-${value as any}`,
		Number,
		DDataParser.checkerNumberMax(value),
	);
}

export type NumberMax<
	GenericValue extends number,
> = GetConstraint<
	ReturnType<
		typeof NumberMax<GenericValue>
	>
>;
