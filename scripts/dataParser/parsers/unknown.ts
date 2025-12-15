import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserUnknownCheckerCustom {}

export type DataParserUnknownCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserUnknownCheckerCustom[
		GetPropsWithValueExtends<
			DataParserUnknownCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<unknown>
);

export interface DataParserDefinitionUnknown extends DataParserDefinition<DataParserUnknownCheckers> {}

export const unknownKind = createDataParserKind("unknown");

type _DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown,
> = (
	& DataParser<
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
			DataParserUnknownCheckers,
			...DataParserUnknownCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserUnknownCheckers,
				...DataParserUnknownCheckers[],
			],
			GenericChecker
		>
	): DataParserUnknown<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends DataParserDefinitionUnknown,
	>(
		definition: GenericDefinition
	): DataParserUnknown<
		MergeDefinition<
			DataParserDefinitionUnknown,
			GenericDefinition
		>
	>;
}

export function unknown<
	const GenericDefinition extends Partial<DataParserDefinitionUnknown> = never,
>(
	definition?: GenericDefinition,
): DataParserUnknown<
		MergeDefinition<
			DataParserDefinitionUnknown,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserInit<DataParserUnknown>(
		unknownKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
		},
		(data) => data,
	) as never;

	return unknown.overrideHandler.apply(self) as never;
}

unknown.overrideHandler = createOverride<DataParserUnknown>("@duplojs/utils/data-parser/unknown");
