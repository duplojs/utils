import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserBigIntExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBigInt,
> = (
	& dataParsers.DataParserBigInt<GenericDefinition>
	& DataParserExtended
);

export interface DataParserBigIntExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBigInt = dataParsers.DataParserDefinitionBigInt,
> extends _DataParserBigIntExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserBigIntCheckers,
			...dataParsers.DataParserBigIntCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserBigIntCheckers,
				...dataParsers.DataParserBigIntCheckers[],
			],
			GenericChecker
		>
	): DataParserBigIntExtended<
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
	): DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	min(
		min: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">
		>
	): DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerBigIntMin]
		>
	>;

	max(
		max: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">
		>
	): DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerBigIntMax]
		>
	>;
}

export function bigint<
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionBigInt> = never,
>(
	definition?: GenericDefinition,
): DataParserBigIntExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionBigInt,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserBigInt,
		DataParserBigIntExtended
	>(
		dataParsers.bigint(definition),
		{
			min(self, min, definition) {
				return self.addChecker(
					dataParsers.checkerBigIntMin(
						min,
						definition,
					),
				);
			},
			max(self, max, definition) {
				return self.addChecker(
					dataParsers.checkerBigIntMax(
						max,
						definition,
					),
				);
			},
		},
	) as never;
}
