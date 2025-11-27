import { type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type DataParser } from "../base";

type _DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional,
> = (
	& dataParsers.DataParserOptional<GenericDefinition>
	& DataParserExtended
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
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function optional<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			dataParsers.DataParserDefinitionOptional<
				Output<GenericDataParser> | undefined
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
	) as never;

	return optional.overrideHandler.apply(self) as never;
}

optional.overrideHandler = createOverride<DataParserOptionalExtended>("@duplojs/utils/data-parser-extended/optional");
