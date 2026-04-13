import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker, type DataParserCheckerDefinition } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export type DataParserNilCheckers = DataParserChecker<
	DataParserCheckerDefinition,
	null
>;

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
}

/**
 * {@include dataParser/classic/nil/index.md}
 */
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
		(data, error, self) => {
			if (data === null) {
				return data;
			} else if (self.definition.coerce && data === "null") {
				return null;
			}

			return addIssue(error, "null", data, self.definition.errorMessage);
		},
		nil.overrideHandler,
	) as never;

	return self as never;
}

nil.overrideHandler = createOverride<DataParserNil>("@duplojs/utils/data-parser/nil");
