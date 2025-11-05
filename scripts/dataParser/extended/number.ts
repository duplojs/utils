import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserNumberExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNumber,
> = (
	& dataParsers.DataParserNumber<GenericDefinition>
	& DataParserExtended
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
	return dataParserExtendedInit<
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
		},
	) as never;
}

export function int(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>,
) {
	return number({
		checkers: [dataParsers.checkerInt(definition)],
	});
}
