import { String } from "@scripts/clean/primitive";
import { type GetConstraint, createConstraint } from "../base";
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

/**
 * {@include clean/Url/index.md}
 */
export const Url = createConstraint(
	"url",
	String,
	DDataParser.checkerUrl(),
);

export type Url = GetConstraint<typeof Url>;

/**
 * {@include clean/StringMin/index.md}
 */
export function StringMin<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
) {
	return createConstraint(
		`string-min-${value}`,
		String,
		DDataParser.checkerStringMin(value),
	);
}

export type StringMin<
	GenericValue extends number,
> = GetConstraint<ReturnType<typeof StringMin<GenericValue>>>;

/**
 * {@include clean/StringMax/index.md}
 */
export function StringMax<
	GenericValue extends number,
>(
	value: GenericValue & OnlyLiteralNumber<GenericValue>,
) {
	return createConstraint(
		`string-max-${value}`,
		String,
		DDataParser.checkerStringMax(value),
	);
}

export type StringMax<
	GenericValue extends number,
> = GetConstraint<ReturnType<typeof StringMax<GenericValue>>>;
