import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";

type _DataParserRecoverExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecover,
> = (
	& Kind<typeof dataParsers.recoverKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserRecover<GenericDefinition>>,
		Input<dataParsers.DataParserRecover<GenericDefinition>>
	>
);

export interface DataParserRecoverExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover,
> extends _DataParserRecoverExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserRecoverCheckers<Output<this>>,
			...dataParsers.DataParserRecoverCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserRecoverCheckers<Output<this>>,
				...dataParsers.DataParserRecoverCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecoverExtended<
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
	): DataParserRecoverExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/recover/index.md}
 */
export function recover<
	GenericDataParser extends DataParser,
	GenericRecoveredValue extends Output<GenericDataParser>,
	const GenericDefinition extends Partial<
		Omit<
			dataParsers.DataParserDefinitionRecover,
			"inner" | "recoveredValue"
		>
	> = never,
>(
	inner: GenericDataParser,
	recoveredValue: GenericRecoveredValue,
	definition?: GenericDefinition,
): DataParserRecoverExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserRecover,
		DataParserRecoverExtended
	>(
		dataParsers.recover(inner, recoveredValue, definition),
		{},
		recover.overrideHandler,
	);

	return self as never;
}

recover.overrideHandler = createOverride<DataParserRecoverExtended>("@duplojs/utils/data-parser-extended/recover");
