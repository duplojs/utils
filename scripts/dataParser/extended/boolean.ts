import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";

type _DataParserBooleanExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBoolean,
> = (
	& Kind<typeof dataParsers.booleanKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserBoolean<GenericDefinition>>,
		Input<dataParsers.DataParserBoolean<GenericDefinition>>
	>
);

export interface DataParserBooleanExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean,
> extends _DataParserBooleanExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/boolean/index.md}
 */
export function boolean<
	const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean>,
		GenericDefinition
	>,
): DataParserBooleanExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserBoolean,
		DataParserBooleanExtended
	>(
		dataParsers.boolean(definition),
		{},
		boolean.overrideHandler,
	);

	return self as never;
}

boolean.overrideHandler = createOverride<DataParserBooleanExtended>("@duplojs/utils/data-parser-extended/boolean");
