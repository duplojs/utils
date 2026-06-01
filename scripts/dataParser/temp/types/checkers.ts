import { type IsExtends } from "@scripts/common";
import { type DataParserChecker } from "../baseChecker";
import type * as AllDataParser from "../parsers";
import { type TheTime } from "@scripts/date";

export interface CheckerCustom {
	base: DataParserChecker;
}

export type DataParserCheckers = (
	| CheckerCustom[keyof CheckerCustom]
	| AllDataParser.DataParserCheckerArrayMax
	| AllDataParser.DataParserCheckerArrayMin
	| AllDataParser.DataParserCheckerBigIntMax
	| AllDataParser.DataParserCheckerBigIntMin
	| AllDataParser.DataParserCheckerEmail
	| AllDataParser.DataParserCheckerInt
	| AllDataParser.DataParserCheckerNumberMax
	| AllDataParser.DataParserCheckerNumberMin
	| AllDataParser.DataParserCheckerRegex
	| AllDataParser.DataParserCheckerStringMax
	| AllDataParser.DataParserCheckerStringMin
	| AllDataParser.DataParserCheckerTimeMax
	| AllDataParser.DataParserCheckerTimeMin
	| AllDataParser.DataParserCheckerUrl
	| AllDataParser.DataParserCheckerUuid
);

export interface EligibleChecker<
	GenericValue extends unknown,
> {
	base: DataParserChecker<
		GenericValue
	>;
	refine: never;
	array: IsExtends<GenericValue, unknown[]> extends true
		? (
			| AllDataParser.DataParserCheckerArrayMax
			| AllDataParser.DataParserCheckerArrayMin
		)
		: never;
	bigInt: IsExtends<GenericValue, bigint> extends true
		? (
			| AllDataParser.DataParserCheckerBigIntMax
			| AllDataParser.DataParserCheckerBigIntMin
		)
		: never;
	number: IsExtends<GenericValue, number> extends true
		? (
			| AllDataParser.DataParserCheckerInt
			| AllDataParser.DataParserCheckerNumberMax
			| AllDataParser.DataParserCheckerNumberMin
		)
		: never;
	string: IsExtends<GenericValue, string> extends true
		? (
			| AllDataParser.DataParserCheckerEmail
			| AllDataParser.DataParserCheckerRegex
			| AllDataParser.DataParserCheckerStringMax
			| AllDataParser.DataParserCheckerStringMin
			| AllDataParser.DataParserCheckerUrl
			| AllDataParser.DataParserCheckerUuid
		)
		: never;
	time: IsExtends<GenericValue, TheTime> extends true
		? (
			| AllDataParser.DataParserCheckerTimeMax
			| AllDataParser.DataParserCheckerTimeMin
		)
		: never;
}

export type GetEligibleChecker<
	GenericValue extends unknown,
> = EligibleChecker<GenericValue> extends infer InferredResult
	? Extract<
		InferredResult[keyof InferredResult],
		DataParserChecker<
			GenericValue
		>
	>
	: never;
