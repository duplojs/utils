import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker, type DataParserCheckerDefinition } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export type DataParserBooleanCheckers = DataParserChecker<
	DataParserCheckerDefinition,
	boolean
>;

export interface DataParserDefinitionBoolean extends DataParserDefinition<
	DataParserBooleanCheckers
> {
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
}

/**
 * {@include dataParser/classic/boolean/index.md}
 */
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
		(data, error, self) => {
			if (typeof data === "boolean") {
				return data;
			} else if (self.definition.coerce) {
				if (typeof data === "string") {
					const lower = data.trim().toLowerCase();
					if (lower === "true" || lower === "false") {
						return lower === "true";
					} else {
						return addIssue(error, "boolean", data, self.definition.errorMessage);
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

			return addIssue(error, "boolean", data, self.definition.errorMessage);
		},
		boolean.overrideHandler,
	) as never;

	return self as never;
}

boolean.overrideHandler = createOverride<DataParserBoolean>("@duplojs/utils/data-parser/boolean");
