import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser, type Input, type Output } from "../base";
import { type DataParserError } from "../error";

type _DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform,
> = (
	& Kind<typeof dataParsers.transformKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserTransform<GenericDefinition>>,
		Input<GenericDefinition["inner"]>
	>
);

export interface DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform,
> extends _DataParserTransformExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserTransformCheckers<Output<this>>,
			...dataParsers.DataParserTransformCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserTransformCheckers<Output<this>>,
				...dataParsers.DataParserTransformCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserTransformExtended<
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
	): DataParserTransformExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function transform<
	GenericDataParser extends DataParser,
	GenericOutput extends unknown,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">
	> = never,
>(
	inner: GenericDataParser,
	theFunction: (
		input: Output<GenericDataParser>,
		error: DataParserError
	) => GenericOutput,
	definition?: GenericDefinition,
): DataParserTransformExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				theFunction(input: Output<GenericDataParser>): GenericOutput;
			}
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserTransform,
		DataParserTransformExtended
	>(
		dataParsers.transform(inner, theFunction, definition),
		{},
	) as never;

	return transform.overrideHandler.apply(self) as never;
}

transform.overrideHandler = createOverride<DataParserTransformExtended>("@duplojs/utils/data-parser-extended/transform");
