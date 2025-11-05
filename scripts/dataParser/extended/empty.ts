import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserEmptyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionEmpty,
> = (
	& dataParsers.DataParserEmpty<GenericDefinition>
	& DataParserExtended
);

export interface DataParserEmptyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty,
> extends _DataParserEmptyExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserEmptyCheckers,
			...dataParsers.DataParserEmptyCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserEmptyCheckers,
				...dataParsers.DataParserEmptyCheckers[],
			],
			GenericChecker
		>
	): DataParserEmptyExtended<
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
	): DataParserEmptyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function empty<
	const GenericDefinition extends Partial<
		dataParsers.DataParserDefinitionEmpty
	> = never,
>(
	definition?: GenericDefinition,
): DataParserEmptyExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserEmpty,
		DataParserEmptyExtended
	>(
		dataParsers.empty(definition),
		{},
	) as never;
}
