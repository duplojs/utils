import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserBigIntExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionBigInt,
> = (
	& Kind<typeof dataParsers.bigIntKind.definition>
	& DataParserExtended<
		GenericDefinition,
		bigint,
		bigint
	>
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/bigint/min/index.md}
	 */
	min(
		min: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">
		>
	): DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerBigIntMin]
		>
	>;

	/**
	 * {@include dataParser/extended/bigint/max/index.md}
	 */
	max(
		max: bigint,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">
		>
	): DataParserBigIntExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerBigIntMax]
		>
	>;
}

/**
 * {@include dataParser/extended/bigint/index.md}
 */
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
	const self = dataParserExtendedInit<
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
		bigint.overrideHandler,
	);

	return self as never;
}

bigint.overrideHandler = createOverride<DataParserBigIntExtended>("@duplojs/utils/data-parser-extended/bigint");
