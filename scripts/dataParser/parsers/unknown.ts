import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export type DataParserUnknownCheckers = GetEligibleChecker<unknown>;

export interface DataParserDefinitionUnknown extends DataParserDefinition<
	DataParserUnknownCheckers
> {}

export const unknownKind = createDataParserKind("unknown");

type _DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown,
> = (
	& DataParserBase<
		GenericDefinition,
		unknown,
		unknown
	>
	& Kind<typeof unknownKind.definition>
);

export interface DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown,
> extends _DataParserUnknown<GenericDefinition> {
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
	): DataParserUnknown<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/unknown/index.md}
 */
export function unknown<
	const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionUnknown> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<DataParserDefinitionUnknown>,
		GenericDefinition
	>,
): DataParserUnknown<
		MergeDefinition<
			DataParserDefinitionUnknown,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserUnknown>(
		unknownKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
		},
		(data) => data,
		unknown.overrideHandler,
	) as never;

	return self as never;
}

unknown.overrideHandler = createOverride<DataParserUnknown>("@duplojs/utils/data-parser/unknown");
