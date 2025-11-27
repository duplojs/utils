import { type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserBooleanExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBoolean,
> = (
	& dataParsers.DataParserBoolean<GenericDefinition>
	& DataParserExtended
);

export interface DataParserBooleanExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean,
> extends _DataParserBooleanExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserBooleanCheckers,
			...dataParsers.DataParserBooleanCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserBooleanCheckers,
				...dataParsers.DataParserBooleanCheckers[],
			],
			GenericChecker
		>
	): DataParserBooleanExtended<
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
	): DataParserBooleanExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function boolean<
	const GenericDefinition extends Partial<
		dataParsers.DataParserDefinitionBoolean
	> = never,
>(
	definition?: GenericDefinition,
): DataParserBooleanExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserBoolean,
		DataParserBooleanExtended
	>(
		dataParsers.boolean(definition),
		{},
	) as never;

	return boolean.overrideHandler.apply(self) as never;
}

boolean.overrideHandler = createOverride<DataParserBooleanExtended>("@duplojs/utils/data-parser-extended/boolean");
