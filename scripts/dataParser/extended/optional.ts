import { type FixDeepFunctionInfer, type IsEqual, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";

type _DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional,
> = (
	& Kind<typeof dataParsers.optionalKind.definition>
	& DataParserExtended<
		GenericDefinition,
		IsEqual<
			GenericDefinition["coalescingValue"],
			unknown
		> extends true
			? Output<GenericDefinition["inner"]> | undefined
			: Output<GenericDefinition["inner"]>,
		Input<GenericDefinition["inner"]> | undefined
	>
);

export interface DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional,
> extends _DataParserOptionalExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserOptionalCheckers<Output<this>>,
			...dataParsers.DataParserOptionalCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserOptionalCheckers<Output<this>>,
				...dataParsers.DataParserOptionalCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserOptionalExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserOptionalExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/optional/index.md}
 */
export function optional<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			dataParsers.DataParserDefinitionOptional<
				Output<GenericDataParser>
			>,
			"inner"
		>
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserOptionalExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserOptional<any>,
		DataParserOptionalExtended
	>(
		dataParsers.optional(inner, definition),
		{},
		optional.overrideHandler,
	);

	return self as never;
}

optional.overrideHandler = createOverride<DataParserOptionalExtended>("@duplojs/utils/data-parser-extended/optional");
