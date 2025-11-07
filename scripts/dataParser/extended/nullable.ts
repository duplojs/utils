import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type DataParser } from "../base";

type _DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable,
> = (
	& dataParsers.DataParserNullable<GenericDefinition>
	& DataParserExtended
);

export interface DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable,
> extends _DataParserNullableExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserNullableCheckers<Output<this>>,
			...dataParsers.DataParserNullableCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserNullableCheckers<Output<this>>,
				...dataParsers.DataParserNullableCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserNullableExtended<
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
	): DataParserNullableExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function nullable<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			dataParsers.DataParserDefinitionNullable<
				Output<GenericDataParser> | null
			>,
			"inner"
		>
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserNullableExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserNullable<any>,
		DataParserNullableExtended
	>(
		dataParsers.nullable(inner, definition),
		{},
	) as never;
}
