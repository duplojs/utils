import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserNilExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNil,
> = (
	& Kind<typeof dataParsers.nilKind.definition>
	& DataParserExtended<
		GenericDefinition,
		null,
		null
	>
);

export interface DataParserNilExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil,
> extends _DataParserNilExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserNilCheckers,
			...dataParsers.DataParserNilCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserNilCheckers,
				...dataParsers.DataParserNilCheckers[],
			],
			GenericChecker
		>
	): DataParserNilExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionNil,
	>(
		definition: GenericDefinition
	): DataParserNilExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			GenericDefinition
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserNilExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function nil<
	const GenericDefinition extends Partial<
		dataParsers.DataParserDefinitionNil
	> = never,
>(
	definition?: GenericDefinition,
): DataParserNilExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserNil,
		DataParserNilExtended
	>(
		dataParsers.nil(definition),
		{},
	) as never;

	return nil.overrideHandler.apply(self) as never;
}

nil.overrideHandler = createOverride<DataParserNilExtended>("@duplojs/utils/data-parser-extended/nil");
