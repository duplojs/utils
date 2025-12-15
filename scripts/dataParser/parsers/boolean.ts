import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserBooleanCheckerCustom {}

export type DataParserBooleanCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserBooleanCheckerCustom[
		GetPropsWithValueExtends<
			DataParserBooleanCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<boolean>
);

export interface DataParserDefinitionBoolean extends DataParserDefinition<DataParserBooleanCheckers> {
	readonly coerce: boolean;
}

export const booleanKind = createDataParserKind("boolean");

type _DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean,
> = (
	& DataParser<
		GenericDefinition,
		boolean,
		boolean
	>
	& Kind<typeof booleanKind.definition>
);

export interface DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean,
> extends _DataParserBoolean<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserBooleanCheckers,
			...DataParserBooleanCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserBooleanCheckers,
				...DataParserBooleanCheckers[],
			],
			GenericChecker
		>
	): DataParserBoolean<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends DataParserDefinitionBoolean,
	>(
		definition: GenericDefinition
	): DataParserBoolean<
		MergeDefinition<
			DataParserDefinitionBoolean,
			GenericDefinition
		>
	>;
}

export function boolean<
	const GenericDefinition extends Partial<DataParserDefinitionBoolean> = never,
>(
	definition?: GenericDefinition,
): DataParserBoolean<
		MergeDefinition<
			DataParserDefinitionBoolean,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserInit<DataParserBoolean>(
		booleanKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, _error, self) => {
			if (typeof data === "boolean") {
				return data;
			} else if (self.definition.coerce) {
				if (typeof data === "string") {
					const lower = data.trim().toLowerCase();
					if (lower === "true" || lower === "false") {
						return lower === "true";
					} else {
						return SymbolDataParserErrorIssue;
					}
				} else if (
					typeof data === "number"
					&& (
						data === 0
						|| data === 1
					)
				) {
					return data === 1;
				}
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return boolean.overrideHandler.apply(self) as never;
}

boolean.overrideHandler = createOverride<DataParserBoolean>("@duplojs/utils/data-parser/boolean");
