import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject,
> = (
	& dataParsers.DataParserObject<GenericDefinition>
	& DataParserExtended
);

export interface DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject,
> extends _DataParserObjectExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserObjectCheckers<Output<this>>,
			...dataParsers.DataParserObjectCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserObjectCheckers<Output<this>>,
				...dataParsers.DataParserObjectCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserObjectExtended<
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
	): DataParserObjectExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function object<
	const GenericShape extends dataParsers.DataParserObjectShape,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionObject, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserObjectExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserObject,
		DataParserObjectExtended
	>(
		dataParsers.object(shape, definition) as never,
		{},
	) as never;
}
