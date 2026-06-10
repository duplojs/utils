import { String } from "@scripts/clean/primitive";
import { type ConstraintHandler, type GetConstraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { type OnlyLiteralNumber } from "@scripts/common";

/**
 * {@include clean/Email/index.md}
 */
export const Email = createConstraint(
	"email",
	String,
	DDataParser.checkerEmail(),
);
export type Email = GetConstraint<typeof Email>;

export const Uuid = createConstraint(
	"uuid",
	String,
	DDataParser.checkerUuid(),
);

export type Uuid = GetConstraint<typeof Uuid>;

/**
 * {@include clean/Url/index.md}
 */
export const Url = createConstraint(
	"url",
	String,
	DDataParser.checkerUrl(),
);

export type Url = GetConstraint<typeof Url>;

export type StringMinHandlerInternal<
	GenericValue extends number = number,
> = Extract<
	ConstraintHandler<
	`string-min-${GenericValue}`,
		string,
		readonly [DDataParser.DataParserCheckerStringMin],
		never
	>,
	any
>;

export type StringMinInternal<
	GenericValue extends number = number,
> = GetConstraint<
	StringMinHandlerInternal<GenericValue>
>;

/**
 * {@include clean/StringMin/index.md}
 */
export function StringMin<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
): StringMinHandlerInternal<GenericValue> {
	return createConstraint(
		`string-min-${value as any}`,
		String,
		DDataParser.checkerStringMin(value),
	);
}

export type StringMin<
	GenericValue extends number,
> = GetConstraint<
	ReturnType<
		typeof StringMin<GenericValue>
	>
>;

export type StringMaxHandlerInternal<
	GenericValue extends number = number,
> = Extract<
	ConstraintHandler<
	`string-max-${GenericValue}`,
		string,
		readonly [DDataParser.DataParserCheckerStringMax],
		never
	>,
	any
>;

export type StringMaxInternal<
	GenericValue extends number = number,
> = GetConstraint<
	StringMaxHandlerInternal<GenericValue>
>;

/**
 * {@include clean/StringMax/index.md}
 */
export function StringMax<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
): StringMaxHandlerInternal<GenericValue> {
	return createConstraint(
		`string-max-${value as any}`,
		String,
		DDataParser.checkerStringMax(value),
	);
}

export type StringMax<
	GenericValue extends number,
> = GetConstraint<
	ReturnType<
		typeof StringMax<GenericValue>
	>
>;

/**
 * {@include clean/NoBlank/index.md}
 */
export const NoBlank = createConstraint(
	"no-blank",
	String,
	DDataParser.checkerRegex(/^\S+$/),
);
export type NoBlank = GetConstraint<typeof NoBlank>;
