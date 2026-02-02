import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserUnknownExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnknown,
> = (
	& Kind<typeof dataParsers.unknownKind.definition>
	& DataParserExtended<
		GenericDefinition,
		unknown,
		unknown
	>
);

export interface DataParserUnknownExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown,
> extends _DataParserUnknownExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserUnknownCheckers,
			...dataParsers.DataParserUnknownCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserUnknownCheckers,
				...dataParsers.DataParserUnknownCheckers[],
			],
			GenericChecker
		>
	): DataParserUnknownExtended<
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
	): DataParserUnknownExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/unknown/index.md}
 */
export function unknown<
	const GenericDefinition extends Partial<
		dataParsers.DataParserDefinitionUnknown
	> = never,
>(
	definition?: GenericDefinition,
): DataParserUnknownExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionUnknown,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserUnknown,
		DataParserUnknownExtended
	>(
		dataParsers.unknown(definition),
		{},
		unknown.overrideHandler,
	);

	return self as never;
}

unknown.overrideHandler = createOverride<DataParserUnknownExtended>("@duplojs/utils/data-parser-extended/unknown");
