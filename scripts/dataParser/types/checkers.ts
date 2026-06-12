import { type NeverCoalescing, type UnionToIntersection, type AnyPredicate, type IsExtends } from "@scripts/common";
import { type DataParserChecker } from "../baseChecker";
import type * as AllDataParser from "../parsers";
import type * as DDate from "@scripts/date";
import type * as DArray from "@scripts/array";
import { type DataParserDefinition } from "../base";

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
	| AllDataParser.DataParserCheckerRefine
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
	refine: AllDataParser.DataParserCheckerRefine<
		AllDataParser.DataParserCheckerDefinitionRefine<GenericValue>
	>;
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
	time: IsExtends<GenericValue, DDate.TheTime> extends true
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

export interface RefinementOfChecker<
	GenericValue extends unknown,
	GenericChecker extends DataParserChecker,
> {
	refine: GenericChecker extends AllDataParser.DataParserCheckerRefine
		? GenericChecker["definition"]["theFunction"] extends AnyPredicate<any, any[], infer InferredPredicate>
			? InferredPredicate
			: never
		: never;

	arrayMin: GenericChecker extends AllDataParser.DataParserCheckerArrayMin
		? number extends GenericChecker["definition"]["min"]
			? never
			: GenericValue extends readonly unknown[]
				? [
					...DArray.CreateTuple<GenericValue[number], GenericChecker["definition"]["min"]>,
					...GenericValue[number][],
				]
				: never
		: never;
	arrayMax: GenericChecker extends AllDataParser.DataParserCheckerArrayMax
		? number extends GenericChecker["definition"]["max"]
			? never
			: GenericValue & DArray.MaxElements<GenericChecker["definition"]["max"]>
		: never;
}

export type ApplyRefinementOfChecker<
	GenericValue extends unknown,
	GenericDataParserDefinition extends DataParserDefinition,
> = GenericDataParserDefinition["checkers"][number] extends infer inferredChecker extends DataParserChecker
	? NeverCoalescing<
		UnionToIntersection<
			inferredChecker extends any
				? RefinementOfChecker<GenericValue, inferredChecker> extends infer InferredResult
					? InferredResult[keyof InferredResult]
					: never
				: never
		> extends infer InferredResult extends GenericValue
			? (
			& InferredResult
			& GenericValue
			)
			: never,
		GenericValue
	>
	: never;
