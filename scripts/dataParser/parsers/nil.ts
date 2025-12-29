import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
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

export interface DataParserDefinitionNil extends DataParserDefinition<
	DataParserNilCheckers
> {
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends DataParserDefinitionNil,
	>(
		definition: GenericDefinition
	): DataParserNil<
		MergeDefinition<
			DataParserDefinitionNil,
			GenericDefinition
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
	const self = dataParserInit<DataParserNil>(
		nilKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
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

	return nil.overrideHandler.apply(self) as never;
}

nil.overrideHandler = createOverride<DataParserNil>("@duplojs/utils/data-parser/nil");
