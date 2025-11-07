import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserNilCheckerCustom {}

export type DataParserNilCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserNilCheckerCustom[
		GetPropsWithValueExtends<
			DataParserNilCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<null>
);

export interface DataParserDefinitionNil extends DataParserDefinition<DataParserNilCheckers> {
	readonly coerce: boolean;
}

export const nilKind = createDataParserKind("nil");

type _DataParserNil<
	GenericDefinition extends DataParserDefinitionNil,
> = (
	& DataParser<
		GenericDefinition,
		null,
		null
	>
	& Kind<typeof nilKind.definition>
);

export interface DataParserNil<
	GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil,
> extends _DataParserNil<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserNilCheckers,
			...DataParserNilCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserNilCheckers,
				...DataParserNilCheckers[],
			],
			GenericChecker
		>
	): DataParserNil<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function nil<
	const GenericDefinition extends Partial<DataParserDefinitionNil> = never,
>(
	definition?: GenericDefinition,
): DataParserNil<
		MergeDefinition<
			DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserNil>(
		nilKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (data === null) {
				return data;
			} else if (self.definition.coerce && data === "null") {
				return null;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}
