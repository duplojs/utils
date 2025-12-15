import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserNumberExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNumber,
> = (
	& Kind<typeof dataParsers.numberKind.definition>
	& DataParserExtended<
		GenericDefinition,
		number,
		number
	>
);

export interface DataParserNumberExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber,
> extends _DataParserNumberExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserNumberCheckers,
			...dataParsers.DataParserNumberCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserNumberCheckers,
				...dataParsers.DataParserNumberCheckers[],
			],
			GenericChecker
		>
	): DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionNumber,
	>(
		definition: GenericDefinition
	): DataParserNumberExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNumber,
			GenericDefinition
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">
		>
	): DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerNumberMin]
		>
	>;

	max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">
		>
	): DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerNumberMax]
		>
	>;

	int(
		definition?: Partial<
			dataParsers.DataParserCheckerDefinitionInt
		>
	): DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerInt]
		>
	>;
}

export function number<
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNumber> = never,
>(
	definition?: GenericDefinition,
): DataParserNumberExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNumber,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserNumber,
		DataParserNumberExtended
	>(
		dataParsers.number(definition),
		{
			min(self, min, definition) {
				return self.addChecker(
					dataParsers.checkerNumberMin(
						min,
						definition,
					),
				);
			},
			max(self, max, definition) {
				return self.addChecker(
					dataParsers.checkerNumberMax(
						max,
						definition,
					),
				);
			},
			int(self, definition) {
				return self.addChecker(
					dataParsers.checkerInt(
						definition,
					),
				);
			},
		},
	);

	return number.overrideHandler.apply(self) as never;
}

number.overrideHandler = createOverride<DataParserNumberExtended>("@duplojs/utils/data-parser-extended/number");

export function int(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>,
) {
	return number({
		checkers: [dataParsers.checkerInt(definition)],
	});
}
